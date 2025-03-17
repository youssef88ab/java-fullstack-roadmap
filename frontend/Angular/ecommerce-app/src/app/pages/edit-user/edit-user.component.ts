import { Component } from '@angular/core';
import { User  , UserService} from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-edit-user',
  imports: [FormsModule , CommonModule , SidebarComponent , RouterModule , NavbarComponent ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
   UserId!: number;
    
    User: User = {
      id: 0,
      username: '',
      email: '',
      role:''
    };
  
  
    constructor(
      private route: ActivatedRoute,
      private UserService: UserService
    ) {}
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.UserId = parseInt(params.get('userId') || '0', 10);
        console.log('Extracted UserId from route:', this.UserId); // Debug
        if (this.UserId) {
          this.fetchUser(this.UserId);
        } else {
          console.log('No valid UserId found in route');
        }
      });
    }
  
    fetchUser(UserId: number): void {
      this.UserService.getUser(UserId).subscribe({
        next: (data) => {
          this.User = data;
          console.log('Fetched User:', this.User); // Debug
        },
        error: (err) => {
          console.error('Error fetching User:', err);
        }
      });
    }
  
    onSubmit(): void {
      this.UserService.updateUser(this.User).subscribe({
        next: (response) => {
          console.log('User updated:', response);
          window.location.href = '/';
        },
        error: (error) => {
          console.error('Update error:', error);
          alert('Error updating User.');
        }
      });
    }

}
