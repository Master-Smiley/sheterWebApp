import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.signupForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required)
    });
  }

  signUp() {
    const user = new User(this.signupForm.value.username, this.signupForm.value.password,
      this.signupForm.value.email, this.signupForm.value.type, this.signupForm.value.gender);
    console.log(user);
    if (this.authService.onSignUp(user)) {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {
  }

}
