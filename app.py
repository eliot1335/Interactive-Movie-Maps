from flask import Flask, render_template, redirect, jsonify, request
from flask_pymongo import PyMongo
import pymongo
import sys
import json
from bson import json_util
from bson.json_util import dumps


app = Flask(__name__)
# setup mongo connection
conn = "mongodb://localhost:27017"


###############################################################################################
# Base route on bring up
@app.route("/")
def index():
    return render_template("home.html")

###############################################################################################
# maps route
@app.route("/maps")
def maps():
    return render_template("maps.html")

# route for JSON object
@app.route("/metadata/world_map")
def mapping():

    client = pymongo.MongoClient(conn)

    db= client.movies_db
    movies= db.movie_table

    fields = {"title": True, "revenue": True, "productionCountries": True, "_id": False}

    json_projects = movies.find({}, fields)

    client.close()

    json_projects = [project for project in json_projects]

    print(type(json_projects))

    return jsonify(json_projects)

###############################################################################################
# scatter route
@app.route("/scatter")
def scatter():
    return render_template("scatter.html")

# route for json object
@app.route("/metadata/scatter_plot")
def scatter_plot():

    client = pymongo.MongoClient(conn)

    # connect to mongo db and collection
    db = client.movies_db
    movies = db.movie_table

    fields = {"title": True, "budget": True, "revenue": True, "genres": True, "_id": False}

    json_projects = movies.find({}, fields)

    client.close()

    json_projects = [project for project in json_projects]

    print(type(json_projects))

    return jsonify(json_projects)

###############################################################################################
# word cloud route
@app.route("/wordcloud", methods=['POST', 'GET'])
def wordcloud():

    client = pymongo.MongoClient(conn)
    db = client.movies_db
    movies = db.movie_table

    genre = "Music"
    text_string = "All work and no play makes jack a dull boy."
    if request.method == "POST":
        genre = request.form['selGenre']
        print("--------------------> Selected: " + genre)
    query = {
            "genres":
                {
                    "$regex": f'.*{genre}.*',
                    "$options": "i" # case-insensitive
                }
            }
    fields = {"keywords": True, "_id": False}
    genre_match_count = movies.count_documents(query)
    genre_match = movies.find(query, fields)
    client.close()
    print("--------------------> Count Match: " + str(genre_match_count) )
    text_string = ""
    for cursor in genre_match:
        text_string += cursor.get("keywords") + ":"

    rec = { "selGenre": genre, "text_string": text_string}

    return render_template("cloud.html", rec=rec)

if __name__ == "__main__":
    app.run(debug=True)