from flask import Flask, request, jsonify, send_from_directory
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
import os
import json

app = Flask(__name__, static_folder='client/build', static_url_path='/')
CORS(app)

mysql = MySQL(app)

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/hello')
@cross_origin()
def hello():
    return 'Hello, World!'

if __name__ == "__main__":
    app.run(debug=True, port=int(os.environ.get("PORT", 5000)))