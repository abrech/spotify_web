from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)


@app.route("/topsongs")
def topsongs():
    top_songs = []

    return render_template("topsongs.html", top_songs=top_songs, enumerate=enumerate)

@app.route("/config")
def config():
    return render_template("config.html")

# Shut down the scheduler when exiting the app

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=6500)