import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.createForm();
   }

   createForm() {
      this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
   }

  onLogin() {
      const user = new User(this.loginForm.value.username, this.loginForm.value.password);
      if (this.authService.loggingIn(user)) {
        sessionStorage.setItem('username', user.username);
        this.router.navigateByUrl('/');
      }
    }

  ngOnInit() {
  }

}
