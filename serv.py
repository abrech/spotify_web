from flask import Flask, render_template

app = Flask(__name__)


@app.route("/topsongs")
def topsongs():
    topsongs = []

    return render_template("topsongs.html", top_songs=top_songs, enumerate=enumerate)

@app.route("/config")
def config():
    return render_template("config.html")

# Shut down the scheduler when exiting the app

if __name__ == "__main__":
    app.run(port=6500)