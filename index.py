from flask import Flask
from flask import render_template

app = Flask(__name__, static_url_path="/static", static_folder="/static")
app.static_folder = 'static'

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/resume")
def resume():
    return render_template("resume.html")
