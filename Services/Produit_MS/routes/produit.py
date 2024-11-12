from flask import Blueprint, jsonify, request
from models.produit import Product
from bson.objectid import ObjectId
from bson.errors import InvalidId
product_bp = Blueprint('product_bp', __name__)



@product_bp.route("/deleteProduit/<product_id>", methods=["DELETE"])
def delete_product(product_id):
    try:
        # Convert to ObjectId and validate format
        object_id = ObjectId(product_id)  
        result = Product.collection.delete_one({"_id": object_id})

        if result.deleted_count == 0:
            return jsonify({"msg": "Product not found"}), 404
        
        return jsonify({"msg": "Product deleted successfully"}), 200
    
    except InvalidId:
        # Return an error if ObjectId conversion fails
        return jsonify({"msg": "Invalid product ID format"}), 400


# Route to add a new product
@product_bp.route("/addproduit", methods=["POST"])
def add_product():
    data = request.get_json()
    if Product.collection.find_one({"name": data["name"]}):
        return jsonify({"msg": "Product with the same name already exists"}), 400
    
    Product.create(**data)
    added_product = Product.collection.find_one({"name": data["name"]})
    
    return jsonify({
        "produit": {
            "id": str(added_product["_id"]),
            "name": added_product["name"],
            "img": added_product["img"],
            "price": added_product["price"],
            "isNewPro": added_product.get("isNewPro", False),
            "isHot": added_product.get("isHot", False),
            "description": added_product["description"],
            "category": added_product.get("category")
        }
    }), 201

# Route to retrieve all products
@product_bp.route("/getproduits", methods=["GET"])
def get_products():
    products = Product.get_all()
    return jsonify({"produits": products}), 200

# Route to retrieve a product by ID
@product_bp.route("/produits/<product_id>", methods=["GET"])
def get_product_by_id(product_id):
    product = Product.get_by_id(ObjectId(product_id))
    if not product:
        return jsonify({"msg": "Product not found"}), 404
    return jsonify({"product": product}), 200

@product_bp.route("/updateProduit/<product_id>", methods=["PUT"])
def update_product(product_id):
    try:
        data = request.get_json()

        # Supprimez le champ `_id` des données de mise à jour, s'il est présent
        if "_id" in data:
            del data["_id"]
        
        if not data:
            return jsonify({"msg": "Invalid data"}), 400
        
        print("Updating product with ID:", product_id)
        print("Updated data:", data)

        result = Product.update(product_id, data)
        
        if result.matched_count == 0:
            return jsonify({"msg": "Product not found"}), 404
        
        updated_doc = Product.get_by_id(product_id)
        return jsonify({"product": updated_doc}), 200
    except Exception as e:
        print("Error updating product:", str(e))
        return jsonify({"msg": "Internal Server Error"}), 500
