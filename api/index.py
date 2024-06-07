from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/api/python")
def predict():
    return "Hello World"

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000)