import { Injectable, Inject } from '@angular/core';
import { decode } from 'jwt-decode';
import { tokenNotExpired } from 'angular2-jwt';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root'
})


  @Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public getToken(): string {
    let token = localStorage.getItem('token');
    console.log(token);
    return token;
  }

  public login() {
    let user = {
      "userName": "austin.french",
      "secret": "1StrongPassowrd",
      "requestor": window.location.host
    };

    this.http.post('./Authenticate', user
    ).subscribe(s => {
      console.log(s);
      localStorage.setItem('token', (s as loginResult).jwt_token);
      });
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }

}


export class loginResult {
  jwt_token: string;
}
