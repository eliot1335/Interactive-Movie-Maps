from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo
import sys

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/movies_db"
mongo = PyMongo(app)

# Base route on bring up
@app.route("/")
def index():
    # print(mars_data)
    return render_template("home.html")

# Base route on bring up
@app.route("/wordcloud")
def wordcloud():
    # print(mars_data)
    return render_template("cloud.html")

if __name__ == "__main__":
    app.run(debug=True)