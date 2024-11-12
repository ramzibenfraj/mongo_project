from flask import Blueprint, jsonify, request
from bson.objectid import ObjectId  
from models.category import Category

category_bp = Blueprint('category_bp', __name__)


# Get all categories
@category_bp.route("/getallcategories", methods=["GET"])
def get_all_categories():
    categories = Category.get_all()
    return jsonify(categories), 200

# Create a new category
@category_bp.route("/create", methods=["POST"])
def add_category():
    data = request.get_json()
    if not data or "name" not in data:
        return jsonify({"msg": "Missing 'name' in request data"}), 400

    if Category.collection.find_one({"name": data["name"]}):
        return jsonify({"msg": "Category with the same name already exists"}), 400

    Category.create(data["name"])
    return jsonify({"msg": "Category added successfully"}), 201

# Update a category by ID
@category_bp.route("/update/<category_id>", methods=["PUT"])
def update_category(category_id):
    data = request.get_json()
    if not data or "name" not in data:
        return jsonify({"msg": "Missing 'name' in request data"}), 400

    category = Category.get_by_id(ObjectId(category_id))
    if category is None:
        return jsonify({"msg": "Category not found"}), 404

    Category.update(ObjectId(category_id), data["name"])
    return jsonify({"msg": "Category updated successfully"}), 200

# Delete a category by ID
@category_bp.route("/delete/<category_id>", methods=["DELETE"])
def delete_category(category_id):
    result = Category.delete(ObjectId(category_id))
    if result.deleted_count == 0:
        return jsonify({"msg": "Category not found"}), 404
    return jsonify({"msg": "Category deleted successfully"}), 200
