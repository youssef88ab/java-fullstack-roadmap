// Extract product ID from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch product details using the product ID
fetch(`http://localhost:9091/api/product/2`)
    .then(response => response.json())
    .then(product => {
        // Populate the product details on the page
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = `$${product.price}`;
        document.getElementById('product-image').src = product.imageUrl || 'https://via.placeholder.com/300';
    })
    .catch(error => {
        console.error('Error fetching product details:', error);
    });
