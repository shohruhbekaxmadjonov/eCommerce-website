from flask import Flask, jsonify, render_template

app = Flask(__name__)

# Dummy product data
products = [
    {"id": 1, "image": "product1.png", "name": "Product1.png", "price": 100},
    {"id": 2, "image": "product2.png", "name": "Product2.png", "price": 250},
    {"id": 3, "image": "product3.png", "name": "Product3.png", "price": 990}
]


@app.route('/')
def index():
    return render_template('index.html', products=products)


if __name__ == '__main__':
    app.run(debug=True)
