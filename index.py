from flask import Flask
from flask import render_template
from flask import send_file

app = Flask(__name__, static_url_path="/static", static_folder="/static")
app.static_folder = 'static'

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/uploads/resume")
def download_resume():
    return send_file("static/documents/resume.pdf")