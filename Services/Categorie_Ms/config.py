# config.py
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    MONGO_URI = os.getenv("MONGO_URI")
    FRONTEND_URL = os.getenv("FRONTEND_URL")
    PRODUCT_SERVICE_URL = "mongodb://127.0.0.1:27017/categorie"
    PORT = int(os.getenv("PORT", 3002))
