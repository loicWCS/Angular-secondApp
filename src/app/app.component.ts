import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bonjour';
  isAdmin = true;

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }
}
