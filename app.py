from flask import Flask, request, jsonify, send_from_directory
import os
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__, static_folder='client/build', static_url_path='/')
CORS(app)

mysql = MySQL(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
@cross_origin()
def serve_react_app(path):
    if path == '':
        return send_from_directory(os.path.join(os.getcwd(), 'client', 'build'), 'index.html')
    else:
        return send_from_directory(os.path.join(os.getcwd(), 'client', 'build'), path)
    
@app.route('/api/hello')
@cross_origin()
def hello():
    return 'Hello, World!'

if __name__ == "__main__":
    app.run(debug=True)