from flask import Flask, render_template, redirect, jsonify, request
from flask_pymongo import PyMongo
import sys

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/movies_db"
mongo = PyMongo(app)

# Base route on bring up
@app.route("/")
def index():
    return render_template("home.html")

# maps route
@app.route("/maps")
def maps():
    return render_template("maps.html")

# scatter route
@app.route("/scatter")
def scatter():
    return render_template("scatter.html")

# word cloud route
@app.route("/wordcloud", methods=['POST', 'GET'])
def wordcloud():
    genre = "Action"
    text_string = "All work and no play makes jack a dull boy."
    if request.method == "POST":
        genre = request.form['selGenre']
        print("--------------------> Selected: " + genre)
    return render_template("cloud.html", text_string = text_string)

if __name__ == "__main__":
    app.run(debug=True)