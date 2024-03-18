from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__=="__main__":
    app.run()