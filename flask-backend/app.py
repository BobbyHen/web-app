import ron
import json
from pymongo import MongoClient
from flask import Flask, render_template, request
from flask_cors import CORS
# creating an instance of the Flask class using the special __name__ variable
website = Flask(__name__)
CORS(website)


# Flask uses function decorators to trigger functions based on URL accessed
@website.route("/")
def index():
    return render_template("index.html")


# URL endpoints
@website.route("/get_quote")
def quote():
    quote = ron.get_quote()
    return json.dumps(quote)


@website.route("/get_quote/<num>")
def quotes(num):
    quotes = ron.get_quotes(num)
    return json.dumps(quotes)


@website.route("/get_mongo", methods=['POST'])
def mongo_get():
    if 'raw' in request.form:
        results = [doc for doc in collection.find()]
    else:
        results = [doc['quote'] for doc in collection.find(projection={'_id': False})]
    return json.dumps(results)
