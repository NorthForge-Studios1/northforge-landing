from fastapi import FastAPI, HTTPException, Depends, Security
from fastapi.security.api_key import APIKeyHeader
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import os
from app.services.email_service import send_submission_email
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="NorthForge API")

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

api_key_header = APIKeyHeader(name="X-API-Key", auto_error=True)

def get_api_key(api_key_header: str = Security(api_key_header)):
    expected_api_key = os.getenv("BACKEND_SECRET_KEY", "default_secret_if_not_set")
    if api_key_header == expected_api_key:
        return api_key_header
    raise HTTPException(status_code=403, detail="No tienes permisos para acceder a este recurso")

class SubmissionRequest(BaseModel):
    name: str
    project: str
    url: str
    email: str
    message: str

@app.post("/api/send-submission")
async def send_submission(request: SubmissionRequest):
    try:
        send_submission_email(
            name=request.name,
            project=request.project,
            url=request.url,
            email=request.email,
            message=request.message,
        )
        return {"success": True}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
