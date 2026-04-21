import os
import json
from google import genai
from google.genai import types

def get_client():
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise ValueError("GEMINI_API_KEY not found in environment")
    return genai.Client(api_key=api_key)

def upload_document_to_gemini(file_path):
    """
    Sube el PDF a los servidores de Google para que Gemini pueda leerlo.
    """
    print(f"Subiendo {file_path} a Google AI...")
    client = get_client()
    file_upload = client.files.upload(file=file_path)
    return file_upload.uri

def get_game_state(document_uri, user_action="INICIO", current_hp=100, current_xp=0):
    """
    Habla con el Game Master y devuelve el siguiente paso de la aventura.
    """

    # SYSTEM PROMPT: El cerebro del Game Master
    system_instruction = """
    Eres el 'Forge-Sim Game Master', un narrador de un simulador de supervivencia técnica Cyberpunk.
    Tu objetivo es transformar el contenido del documento PDF proporcionado en un desafío inmersivo.

    REGLAS DE ORO:
    1. Responde SIEMPRE en formato JSON puro.
    2. Usa los conceptos del documento para crear las preguntas.
    3. Si el usuario falla (Opción incorrecta), resta HP (10-20 pts).
    4. Si acierta, suma XP (50-100 pts).
    5. La narrativa debe ser oscura, técnica y emocionante.
    6. EN ascii_art, GENERA UN DIBUJO ASCII REPRESENTANDO LA ESCENA ACTUAL (ej: una terminal, un chip, un enemigo robot). EL ARTE ASCII DEBE SER ELABORADO Y USAR CARACTERES MULTIPLES. USA \n PARA LOS SALTOS DE LINEA EN EL ARTE.

    FORMATO DE RESPUESTA (JSON):
    {
      "ascii_art": "[Jules: Genera un dibujo ASCII detallado de la escena aquí, asegurando que esté en una sola línea de string usando escapes \\n]",
      "narrativa": "Descripción de la escena...",
      "desafio": "La pregunta técnica basada en el PDF...",
      "opciones": ["A: ...", "B: ...", "C: ..."],
      "hp_actual": 80,
      "xp_ganada": 100,
      "finalizado": false
    }
    """

    client = get_client()

    contents = [
        types.Content(
            role="user",
            parts=[
                types.Part.from_uri(file_uri=document_uri, mime_type="application/pdf"),
                types.Part.from_text(text=f"Acción del usuario: {user_action}. HP actual: {current_hp}. XP actual: {current_xp}")
            ]
        )
    ]

    config = types.GenerateContentConfig(
        system_instruction=system_instruction,
        model='gemini-2.5-flash',
        response_mime_type='application/json'
    )

    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=contents,
        config=config
    )

    return response.text
