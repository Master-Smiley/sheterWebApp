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
    let newUser;
    this.allUsers.forEach(element => {
      if (element.username === user.username && element.password === user.password) {
        exists = true;
        newUser = element;
      }
    });
    if (exists) {
      sessionStorage.setItem('username', user.username);
      sessionStorage.setItem('gender', newUser.gender);
      return newUser;
    }
    return null;

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

  getUser() {
    this.allUsers.forEach(element => {
      if (sessionStorage.getItem('username') === element.username) {
        return element;
      }
      return new User(null, null, null);
    });
  }

}
