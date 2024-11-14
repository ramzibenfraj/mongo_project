# app.py
from flask import Flask
from config import Config
from flask_cors import CORS
from routes.category import category_bp

app = Flask(__name__)
app.config.from_object(Config)
# Enable CORS
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

app.register_blueprint(category_bp)
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=Config.PORT, debug=True)

