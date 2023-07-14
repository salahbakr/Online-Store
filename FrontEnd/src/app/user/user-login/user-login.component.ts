import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, 
              private authService: AuthenticationService, 
              private alertyfy: AlertifyService,
              private router: Router) {}

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(5)]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  get userName() {
    return this.loginForm.get('userName') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  onLogin() {
    if(!localStorage.getItem('token')) {
      const token = this.authService.authUser(this.loginForm.value);
      if(token) {
        this.alertyfy.success("Logged In Successfully!");
        localStorage.setItem('token', token.userName);
        this.router.navigate(["/"]);
      } else {
        this.alertyfy.error("Wrong UserName or Password");
      }
    }
  }

}
