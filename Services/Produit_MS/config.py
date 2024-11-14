# config.py
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    MONGO_URI = os.getenv("MONGO_URI")
    FRONTEND_URL = os.getenv("FRONTEND_URL")
    PORT = int(os.getenv("PORT", 3003))
