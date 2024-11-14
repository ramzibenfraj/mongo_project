# config.py
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    MONGO_URI = "mongodb://mongodb:27017/categoridb"
    FRONTEND_URL = os.getenv("FRONTEND_URL")
    PORT = int(os.getenv("PORT", 3002))
