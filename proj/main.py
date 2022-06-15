from flask import Blueprint, render_template, url_for, redirect
from . import db
from flask_login import login_required, current_user

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return redirect(url_for('main.topsongs'))

@main.route("/topsongs")
def topsongs():
    top_songs = []

    return render_template("topsongs.html", top_songs=top_songs, enumerate=enumerate)

@main.route("/config")
@login_required
def config():
    return render_template("config.html")