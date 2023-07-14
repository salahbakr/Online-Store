import { Component } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  userName!: string;

  constructor(private alertyfy: AlertifyService) { }

  ngOnInit() {
    this.userNameMessage();
  }

  loggedIn() {
    return localStorage.getItem('token');
  }

  onLogOut() {
    localStorage.removeItem('token');
    this.alertyfy.success("Logged Out Successfully");
  }

  userNameMessage() {
    if(this.loggedIn()) {
      this.userName = this.loggedIn() as string;
    }
  }

}
