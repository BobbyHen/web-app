import ron
from pymongo import MongoClient
from flask import Flask, render_template

# creating an instance of the Flask class using the special __name__ variable
website = Flask(__name__)

# Connecting to the database
mongoURI = ""
with open("connectionString.txt", "r") as file:
    mongoURI = file.readline()
client = MongoClient(mongoURI)
# The ronSwansonQuotes database is created if it doesn't exist
db = client.ronSwansonQuotes


# Flask uses function decorators to trigger functions based on URL accessed
@website.route("/")
def index():
    return render_template("index.html")


@website.route("/quote")
def Quote():
    # quote is a list
    quote = ron.get_quote()
    data = {
        "quote": quote[0],
    }
    # The quotes collection is created if it doesn't exist
    db.quotes.insert_one(data)
    return render_template("quote.html", quote = data["quote"])



@website.route("/<num>")
def index_multi(num):
    # quotes is a list
    quotes = ron.get_quotes(num)
    html = "<html><body>"
    for x in quotes:
        html += "<p>" + x + "</p>"
    html += "</body></html>"
    return html
