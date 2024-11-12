from pymongo import MongoClient
from bson.objectid import ObjectId
from config import Config

client = MongoClient(Config.MONGO_URI)
db = client.authlogin

class Product:
    collection = db.produits

    @staticmethod
    def create(name, img, price, isNewPro, isHot, description, category):
        product = {
            "name": name,
            "img": img,
            "price": price,
            "isNewPro": isNewPro,
            "isHot": isHot,
            "description": description,
            "category": category
        }
        return Product.collection.insert_one(product)

    @staticmethod
    def get_all():
        return [{**prod, "_id": str(prod["_id"])} for prod in Product.collection.find({})]
    
    @staticmethod
    def get_by_id(product_id):
        product = Product.collection.find_one({"_id": ObjectId(product_id)})
        if product:
            product["_id"] = str(product["_id"])
        return product


    @staticmethod
    def delete(product_id):
        return Product.collection.delete_one({"_id": ObjectId(product_id)})
    @staticmethod
    @staticmethod
    def update(product_id, updated_data):
        try:
            print("Updating with data:", updated_data)
            result = Product.collection.update_one(
                {"_id": ObjectId(product_id)},
                {"$set": updated_data}
            )
            return result
        except Exception as e:
            print("Error in Product.update:", str(e))
            raise
