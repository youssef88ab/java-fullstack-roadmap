import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-manage-products',
  imports: [FormsModule, CommonModule, RouterModule, SidebarComponent],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css' ,
  
})
export class ManageProductsComponent implements OnInit{
    products: Product[] = [] ; 
    
    constructor(private productService : ProductService) {

    }
  
    ngOnInit(): void {
        this.fetchProducts();
    }

    fetchProducts(): void {
        
        this.productService.getProducts()
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log('Fetched products:', data);  // Log the response data
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

    deleteProduct(id: number) : void {
        console.log('Deleting product with id:', id);  // Log the id
        if (confirm('Are you sure you want to delete this product?')) {
            this.productService.deleteProduct(id)
              .subscribe({
                next: () => {
                  this.products = this.products.filter(product => product.productId !== id);
                },
                error: (err) => {
                  console.error('Error deleting product:', err);
                }
              });
            }
        }
}
