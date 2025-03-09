import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Chart from 'chart.js/auto';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule, RouterModule, SidebarComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  topSellingProducts: any[] = [
    {
      image: 'assets/images/product1.png',
      name: 'Product 1',
      category: 'Category 1',
      price: 100,
      quantitySold: 50,
      totalAmount: 5000
    },
    {
      image: 'assets/images/product2.png',
      name: 'Product 2',
      category: 'Category 2',
      price: 150,
      quantitySold: 30,
      totalAmount: 4500
    }
  ];

  recentOrders: any[] = [
    { image: 'assets/images/product1.png', name: 'Product 1', category: 'Category 1', price: '$100' },
    { image: 'assets/images/product2.png', name: 'Product 2', category: 'Category 2', price: '$200' },
    { image: 'assets/images/product3.png', name: 'Product 3', category: 'Category 3', price: '$300' }
  ];

xValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
yValues = [200, 400, 550, 600, 300, 200, 250, 230, 500, 600, 400, 600];

categories = ["Electronics", "Fashion", "Furniture", "Sports", "Toys"];
salesByCategory = [120, 90, 50, 30, 80];
categoryColors = [
  "#6A5ACD", // Electronics
  "#FF69B4", // Fashion
  "#2E8B57", // Furniture
  "#FFD700", // Sports
  "#FF6347"  // Toys
];

ngOnInit() {
  new Chart("myChart", {
    type: "line",
    data: {
      labels: this.xValues,
      datasets: [{
        label: 'Sales Trend',  // Add label for clarity
        fill: false,
        borderColor: "rgba(0,0,255,1.0)",
        backgroundColor: "rgba(0,0,255,0.1)",
        data: this.yValues,
        tension: 0.1 // Change from lineTension to tension
      }]
    },
    options: {
      responsive: true, // Ensure responsiveness
      plugins: {
        legend: { 
          display: false
        }
      },
      scales: {
        y: {
          min: 0,
          max: 800,
        }
      }
    }
  });

  new Chart("pieChart", {
    type: "pie",
    data: {
      labels: this.categories,
      datasets: [{
        backgroundColor: this.categoryColors,
        data: this.salesByCategory
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Sales by Category"
        },
        legend: {
          display: true,
          position: 'bottom',  // Place the legend (nations) at the bottom
          labels: {
            boxWidth: 20,  // Control size of the legend box
            padding: 15     // Control spacing between legend items
          }
        }
      },
      aspectRatio: 0.8,  // Increase height of the chart
    }
  });
}

}
