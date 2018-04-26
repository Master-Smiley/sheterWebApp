import { User } from './models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  allUsers: User[];
  constructor(private router: Router) {
    this.allUsers = [];
  }

  loggingIn(user: User) {
    let exists = false;
    this.allUsers.forEach(element => {
      if (element.username === user.username && element.password === user.password) {
        exists = true;
      }
    });
    if (exists) {
      localStorage.setItem('user', user.username);
      return true;
    }
    return false;

  }

  onSignUp(user: User) {
    console.log(user);
    let exists = false;
    if (this.allUsers) {
      this.allUsers.forEach(element => {
        if (element.username === user.username && element.password === user.password) {
          exists = true;
        }
      });
    }
    if (!exists) {
      this.allUsers.push(user);
      return true;
    }
    return false;
  }

}
