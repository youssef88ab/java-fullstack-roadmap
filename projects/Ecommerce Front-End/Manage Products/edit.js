// Wait for the DOM to load completely before executing any script
   document.addEventListener("DOMContentLoaded", function () {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");


    // Fetch product from backend
    fetch(`http://127.0.0.1:8080/products/${productId}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(product => {
            // Replace input values by product values
            document.getElementById("id-input").value       = product.id;
            document.getElementById("name-input").value     = product.name;
            document.getElementById("category-input").value = product.category;
            document.getElementById("price-input").value    = product.price;            
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert("Failed to load product data.");
        });

        // Handle form submission to update student
        const form = document.getElementById("edit-product-form");
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Get Updated Product Data From The form
            const updatedProduct = {
                id:       document.getElementById("id-input").value,
                name:     document.getElementById("name-input").value,
                category: document.getElementById("category-input").value,
                price:    document.getElementById("price-input").value
            };
        
          // Update product using PUT request
        fetch(`http://127.0.0.1:8080/products/update/${productId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProduct),
        })
        .then(response => {
            if (response.ok) {
                alert("Product updated successfully!");
                window.location.href = "index.html"; // Redirect to home page
            } else {
                throw new Error("Update failed");
            }
        })
        .catch(error => {
            console.error("Error updating product:", error);
            alert("An error occurred while updating the product.");
        }); 
})
});