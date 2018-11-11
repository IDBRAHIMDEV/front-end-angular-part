import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  
  login() {
   
    this.userService.login(this.email, this.password).subscribe((res: any) => {
       console.log(res)
      if(res.status) {
        this.userService.setAuthStatusListener(true);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      } 
    })
  }
}
