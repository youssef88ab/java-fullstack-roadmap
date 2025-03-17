import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { OrderService, Order } from '../../services/order.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService , User } from '../../services/user.service';
import {Component} from '@angular/core';



@Component({
  selector: 'app-manage-users',
  imports: [NavbarComponent, SidebarComponent , CommonModule , RouterModule],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent implements OnInit {

    Users: User[] = [];
  
    constructor(private UserService: UserService) {}
  
    ngOnInit(): void {
      this.fetchUsers();
    }
  
    fetchUsers(): void {
      this.UserService.getUsers().subscribe({
        next: (data) => {
          this.Users = data;
          console.log('Fetched Users:', data); // Log the response data
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  

}
