from flask import Flask, render_template
from flask_cors import CORS
from proj import create_app



if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=6500)