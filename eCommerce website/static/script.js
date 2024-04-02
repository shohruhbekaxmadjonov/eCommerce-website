document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');

    // Fetch products from backend
    fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(products => {
            // Populate product list
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product');
                productItem.innerHTML = `
          <img src="../static/images/${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>$${product.price}</p>
          <button>Add to Cart</button>
        `;
                productList.appendChild(productItem);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
