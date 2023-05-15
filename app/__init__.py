from flask import Flask


app = Flask(__name__)


@app.route('/test', methods=['GET', 'POST'])
def test():
    return {"message": "Hello, World!"}
