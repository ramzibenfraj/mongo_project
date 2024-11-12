# app.py
from flask import Flask
from config import Config
from flask_cors import CORS
from routes.produit import product_bp

app = Flask(__name__)
app.config.from_object(Config)

# Enable CORS
CORS(app, origins=[Config.FRONTEND_URL , Config.PRODUCT_SERVICE_URL], supports_credentials=True)

# Register blueprints
app.register_blueprint(product_bp)

if __name__ == "__main__":
    app.run(port=Config.PORT, debug=False)
