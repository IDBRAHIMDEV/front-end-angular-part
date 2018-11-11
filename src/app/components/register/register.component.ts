import { UserService } from './../../services/user.service';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    
      this.userService.register(this.user).subscribe((user: User) => {
        this.user = user;
        if(user) {
          this.router.navigate(['/']);
        }
      })
  }

  

}
