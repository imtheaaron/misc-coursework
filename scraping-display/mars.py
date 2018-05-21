from flask import Flask, render_template, jsonify, redirect
from flask_pymongo import PyMongo
import scrape_mars

app = Flask(__name__)
mongo=PyMongo(app)


@app.route("/")
def index():
    data = mongo.db.scrape.find_one()
    return render_template("index.html", data=data)

@app.route("/scrape")
def scrape():
    new_data = scrape_mars.scrape_mars()
    mongo.db.scrape.update(
        {},
        new_data,
        upsert=True
    )

    return redirect("http://localhost:5000/", code=302)

if __name__ == "__main__":
    app.run(debug=True)