  // Fetch data from the backend API (make sure your Spring Boot app is running)
fetch('http://localhost:9091/api/products')
.then(response => response.json())  // Parse the response as JSON
.then(products => {
    const container = document.getElementById('product-container');

    // Loop through each product and display it
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

          // Add the product details (assumes 'name', 'description', 'price', 'imageUrl' are keys in your JSON)
            productElement.innerHTML = `
                <img src="https://via.placeholder.com/300" alt="${product.name}" />
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price}</p>
            `;

            container.appendChild(productElement);
        });
})

.catch(error => {
        console.error('Error fetching products:', error);
});