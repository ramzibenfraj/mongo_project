# app.py
from flask import Flask
from config import Config
from flask_cors import CORS
from routes.produit import product_bp

app = Flask(__name__)
app.config.from_object(Config)

# Enable CORS
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

# Register blueprints
app.register_blueprint(product_bp)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3003, debug=True)
