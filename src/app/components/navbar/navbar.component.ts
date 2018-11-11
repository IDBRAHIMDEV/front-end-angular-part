import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
 
  userAutenticated: boolean = false;

  ngOnInit() {
    this.userAutenticated = this.userService.getToken();
    this.userService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userAutenticated = isAuthenticated;
      });
  }


  logout() {
     this.userService.removeToken();
     this.userAutenticated = false;
     this.router.navigate(['/login']);
  }



}
