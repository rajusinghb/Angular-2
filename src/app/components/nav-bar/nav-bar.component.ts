import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  public loggedIn=false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn()
    
  }
  logoutUser(){
    this.loginService.logout()
    location.reload()
  }


}
