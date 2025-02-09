// Fetch data from the backend API (make sure your Spring Boot app is running)
fetch('http://localhost:9091/api/products')
  .then(response => response.json())  // Parse the response as JSON
  .then(products => {
    const container = document.getElementById('product-container');

    // Loop through each product and display it
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');

     // Add the product details and wrap it in a link
      productElement.innerHTML = `
      <a href="http://localhost:9091//product-details.html?id=${product.id}" class="product-link">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">$${product.price}</p>
      </a>
      `;


      container.appendChild(productElement);
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });
