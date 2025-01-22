from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow CORS for all origins (adjust for production as needed)

@app.route('/home')
def members():
    return {"members": ["member1", "member2", "member3"]}

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80, debug=True)
