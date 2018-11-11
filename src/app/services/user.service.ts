import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  token: string = "";
  url: string = "http://localhost:3000/api";
  private authStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  setAuthStatusListener(etat: boolean) {
    this.authStatusListener.next(etat);
  }
  

  getUsers() {
    return this.http.get(this.url+'/users');
  }

  register(user: User) {
    return this.http.post(this.url+'/users', user);
  }

  login(email: string, password: string) {
    return this.http.post(this.url+'/users/login', {email: email, password: password})
  }

  getToken() {
    return !!localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
