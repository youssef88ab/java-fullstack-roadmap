function getProducts() {
    fetch('http://127.0.0.1:8080/products/all')
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            else {
                throw new Error('Network response was not ok');
            }
        }
        ) 
        .then(products => {
            console.log(products);
            const tableBody = document.querySelector('.product-table tbody'); 
            tableBody.innerHTML= ""; // Clear Previous Data ; 

            products.forEach(product => {
                const row = document.createElement("tr");
                row.className = 'border-bottom border-1';
                row.innerHTML = `
                    <td><img class="img-fluid" src="images/AIR+FORCE+1+'07.png" alt="Nike Air Force 1 '07"></td>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>$${product.price}</td>
                    <td>In Stock (120)</td>
                    <td>
                        <button class="delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
                        <button class="edit-btn" onclick="editProduct(${product.id})">Edit</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('There was a problem with the fetch operation : ' , error));

}

// 🛑 DELETE Request Function
function deleteProduct(id) {
    if (confirm("Are you sure you want to delete this Product?")) {
        fetch(`http://127.0.0.1:8080/products/delete/${id}`, { method: "DELETE" })
            .then(response => {
                if (response.ok) {
                    alert("Product deleted successfully!");
                    getProducts(); // Reload students
                }
            })
            .catch(error => console.error("Error deleting Product:", error));
    }
}

function editProduct(id) {
    window.location.href = `edit-product.html?id=${id}`;
    
}


getProducts();