import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  message: string = "Hello , Angular";

  isVisible = true ;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

}
