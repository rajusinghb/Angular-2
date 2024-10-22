import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:9595";  // Base URL for your backend API

  constructor(private http: HttpClient) { }

  // Method to generate a token by sending credentials to the backend
  generateToken(credentials: any) {
    return this.http.post(`${this.url}/token`, credentials);
  }

  // Method to store the token in localStorage and return true
  loginUser(token: string): boolean {
    localStorage.setItem("token", token);
    return true;
  }

  // Method to check if the user is logged in by verifying the presence of a token
  isLoggedIn(): boolean {
    let token = localStorage.getItem("token");
    return !(token === undefined || token === '' || token === null);
  }

  // Method to remove the token from localStorage and return true
  logout(): boolean {
    localStorage.removeItem('token');
    return true;
  }

  // Method to retrieve the token from localStorage
  getToken(): string | null {
    return localStorage.getItem("token");
  }
}
