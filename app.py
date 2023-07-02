from flask import Flask, request, jsonify, send_from_directory
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
import os
import json

app = Flask(__name__, static_folder='client/build', static_url_path='/')
CORS(app)

mysql = MySQL(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if "api" in path:
        # Exclude API routes, let Flask handle them
        return
    # Serve the React app's index.html for all other routes
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/hello')
@cross_origin()
def hello():
    return 'Hello, World!'

if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True, port=int(os.environ.get("PORT", 5000)))