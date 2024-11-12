# config.py
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    MONGO_URI = os.getenv("MONGO_URI")
    FRONTEND_URL = os.getenv("FRONTEND_URL")
    PRODUCT_SERVICE_URL = os.getenv("PRODUCT_SERVICE_URL")
    PORT = int(os.getenv("PORT", 3003))
