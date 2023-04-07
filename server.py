from flask import Flask, request
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

@app.route('/log', methods=['POST'])
def log():
    with open('log.txt', 'a') as f:
        f.write(f"datetime:|{datetime.now()}|--------------"+request.data.decode() + '\n')
    return '', 204

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080 ,debug=True,ssl_context='adhoc')
