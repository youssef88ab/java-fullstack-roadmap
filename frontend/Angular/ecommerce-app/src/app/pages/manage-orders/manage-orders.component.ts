import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { OrderService, Order } from '../../services/order.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-orders',
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './manage-orders.component.html',
  styleUrl: './manage-orders.component.css',
})
export class ManageOrdersComponent implements OnInit {
  Orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (data) => {
        this.Orders = data;
        console.log('Fetched Orders:', data); // Log the response data
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  CancelOrder(id: number): void {
    if (confirm('Are You Sure You Want To Cancel This Order')) {
      this.orderService.cancelOrder(id).subscribe({
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  
}
