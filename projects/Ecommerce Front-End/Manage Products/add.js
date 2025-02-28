// Wait for the DOM to load completely before executing any script
document.addEventListener("DOMContentLoaded", function () {
        // Handle form submission to update student
        const form = document.getElementById("add-product-form");
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Get Updated Product Data From The form
            const addedProduct = {
                name:     document.getElementById("name-input").value,
                category: document.getElementById("category-input").value,
                price:    document.getElementById("price-input").value
            };
        
          // Update product using PUT request
        fetch(`http://127.0.0.1:8080/products/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addedProduct),
        })
        .then(response => {
            if (response.ok) {
                alert("Product Added successfully!");
                window.location.href = "index.html"; // Redirect to home page
            } else {
                throw new Error("Add failed");
            }
        })
        .catch(error => {
            console.error("Error Adding product:", error);
            alert("An error occurred while Adding the product.");
        }); 
})
});