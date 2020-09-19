import { Component, OnInit } from '@angular/core';
import { DataExampleService } from '../data-example.service';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public constructor(private data: DataExampleService, private auth: AuthService) {
    this.isLoggedIn = this.auth.isAuthenticated();
  }

  isLoggedIn: boolean;

  viewData: [];

  ngOnInit() {
    this.data.getData().subscribe(s => { this.viewData = s });
  }

  login() {
    this.auth.login();
  }

}
