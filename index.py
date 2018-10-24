from flask import Flask
from flask import render_template
from flask import send_file

app = Flask(__name__, static_url_path="/static", static_folder="/static")
app.static_folder = 'static'

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/resume")
def resume():
    return render_template("resume.html")

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/uploads/resume")
def download_resume():
    return send_file("static/documents/resume.pdf")