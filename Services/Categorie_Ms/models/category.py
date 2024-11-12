from pymongo import MongoClient
from config import Config

client = MongoClient(Config.MONGO_URI)
db = client.authlogin

class Category:
    collection = db.categories

    @staticmethod
    def create(name):
        return Category.collection.insert_one({"name": name})

    @staticmethod
    def get_all():
        return [{**cat, "_id": str(cat["_id"])} for cat in Category.collection.find({})]

    @staticmethod
    def get_by_id(category_id):
        return Category.collection.find_one({"_id": category_id})

    @staticmethod
    def update(category_id, name):
        return Category.collection.update_one({"_id": category_id}, {"$set": {"name": name}})

    @staticmethod
    def delete(category_id):
        return Category.collection.delete_one({"_id": category_id})
