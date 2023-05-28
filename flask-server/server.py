from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route("/members")

def members():
    return {"members": ["member1", "member2", "member3"]}

if __name__ == "__main__":
    app.run(debug=True)