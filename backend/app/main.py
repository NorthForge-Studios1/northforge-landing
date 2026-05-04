from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import json
import tempfile
from app.services.ai_service import upload_document_to_gemini, get_game_state
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="NorthForge Forge-Sim API")

# Setup CORS with a whitelist
origins = [
    "http://localhost:5173",
    "https://northforgestudios.tech",
    "https://www.northforgestudios.tech"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class GameActionRequest(BaseModel):
    document_uri: str
    user_action: str
    current_hp: int
    current_xp: int

@app.post("/api/upload")
async def upload_pdf(file: UploadFile = File(...)):
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="El archivo debe ser un PDF")

    # Save the uploaded file temporarily
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
            tmp_file.write(await file.read())
            tmp_file_path = tmp_file.name

        # Upload to Gemini
        uri = upload_document_to_gemini(tmp_file_path)

        # Generate initial state
        initial_state_str = get_game_state(uri, user_action="INICIO", current_hp=100, current_xp=0)

        # Parse the JSON response
        try:
            initial_state = json.loads(initial_state_str)
        except json.JSONDecodeError:
            print("Failed to parse JSON:", initial_state_str)
            raise HTTPException(status_code=500, detail="Respuesta invalida del Game Master")

        # Return URI and initial state
        return {
            "document_uri": uri,
            "state": initial_state
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if 'tmp_file_path' in locals() and os.path.exists(tmp_file_path):
            os.remove(tmp_file_path)

@app.post("/api/game_action")
async def game_action(request: GameActionRequest):
    try:
        state_str = get_game_state(
            request.document_uri,
            user_action=request.user_action,
            current_hp=request.current_hp,
            current_xp=request.current_xp
        )

        try:
            state = json.loads(state_str)
        except json.JSONDecodeError:
            print("Failed to parse JSON:", state_str)
            raise HTTPException(status_code=500, detail="Respuesta invalida del Game Master")

        return state

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
