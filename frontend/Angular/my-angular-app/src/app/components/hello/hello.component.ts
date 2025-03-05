import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  imports: [FormsModule , CommonModule], 
  styleUrls: ['./hello.component.css']
})


export class HelloComponent {
  message: string = "Hello, Angular";
  imageUrl: string = "https://angular.io/assets/images/logos/angular/angular.png"; 
  name: string = "" ;
  isLogging: boolean = false;

  showMessage() {
    alert("Hello From Angular");
  }

  isActive: boolean = true ;

  users: string[] = ['Alice', 'Bob', 'Charlie'];

  status: string = "Pending";

  user = {email: '' , password: ''};

  login() {
    console.log(this.user);
  }
}