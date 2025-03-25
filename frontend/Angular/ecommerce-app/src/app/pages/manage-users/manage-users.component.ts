import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService , User } from '../../services/user.service';
import {Component} from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-manage-users',
  imports: [FormsModule , NavbarComponent, SidebarComponent , CommonModule , RouterModule  , MatButtonModule , MatIconModule , MatMenuModule],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent implements OnInit {

    Users: User[] = [];

    UserNumber: number = this.Users.length ;

    keyword: string = '';
  
    constructor(private UserService: UserService) {}
  
    ngOnInit(): void {
      this.fetchUsers();
    }
  
    fetchUsers(): void {
      this.UserService.getUsers().subscribe({
        next: (data) => {
          this.Users = data;
          this.UserNumber = this.Users.length;
          console.log('Fetched Users:', data); // Log the response data
        },
        error: (err) => {
          console.error(err);
        },
      });
    }

    onSearch(keyword: string): void {
      this.UserService.searchUser(keyword).subscribe({
        next: (data) => {
          this.Users = data; 
          console.log("Serched Users : " , this.Users); 
        },
        error: (err) => {
          console.error('Error Searching User');
        }
      })
    }

    deleteUser(id: number): void {
      if (confirm("Are You Sure You Want To Delete This User ?"))
      {
      this.UserService.deleteUser(id).subscribe({
        next: (data) => {
          console.log("Deleted Secusfully");
          this.fetchUsers(); 
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
            
  }
  
}
