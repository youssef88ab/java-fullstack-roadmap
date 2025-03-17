import { Component } from '@angular/core';
import { Order , OrderService , OrderItems } from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-order-details',
  imports: [FormsModule, CommonModule , RouterModule, SidebarComponent, NavbarComponent],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {
    orderId!: number;

    OrderItems = {
      id : 0 ,
      quantity : 0 ,
      price : 0 ,
      productName: ''
    }
    
    order: Order = {
        orderId : 0 , 
        userId : 0 , 
        totalPrice : 0 , 
        status : '' , 
        orderDate : '' , 
        orderItems: [] as OrderItems[], 
        paymentId : 0 , 
    };
  
  
    constructor(
      private route: ActivatedRoute,
      private orderService: OrderService
    ) {}
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.orderId = parseInt(params.get('orderId') || '0', 10);
        console.log('Extracted orderId from route:', this.orderId); // Debug
        if (this.orderId) {
          this.fetchorder(this.orderId);
        } else {
          console.log('No valid orderId found in route');
        }
      });
    }
  
    fetchorder(orderId: number): void {
      this.orderService.getOrder(orderId).subscribe({
        next: (data) => {
          this.order = data;
          console.log('Fetched order:', this.order); // Debug
        },
        error: (err) => {
          console.error('Error fetching order:', err);
        }
      });
    }

    cancelorder(id : number) : void {
      this.orderService.cancelOrder(this.orderId).subscribe({
        next: (data) => {
          console.log("Canceled Order : " , data);
        },
        error: (err) => {
          console.error("Error Canceleing Order :" , err);
        }
    })

      

    }
}
