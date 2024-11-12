# app.py
from flask import Flask
from config import Config
from flask_cors import CORS
from routes.category import category_bp

app = Flask(__name__)
app.config.from_object(Config)

# Enable CORS
CORS(app, origins=[Config.FRONTEND_URL , Config.PRODUCT_SERVICE_URL], supports_credentials=True)

app.register_blueprint(category_bp)

if __name__ == "__main__":
    app.run(port=Config.PORT, debug=True)
