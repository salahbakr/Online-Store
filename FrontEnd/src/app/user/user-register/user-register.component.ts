import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  registrationForm!: FormGroup;
  user!: User;

  constructor(private fb: FormBuilder, 
              private userService: UserService, 
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
    // this.registrationForm = new FormGroup({
      // userName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      // email: new FormControl(null, [Validators.required, Validators.email]),
      // password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      // confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      // mobile: new FormControl(null, [Validators.required, Validators.maxLength(11)])
    // }, this.passwordMatchingValidator);
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
      mobile: [null, [Validators.required, Validators.maxLength(11)]]
    }, {validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit() {
    if(this.registrationForm.valid) {
      //this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.alertify.success("Registered Successfully!");
      if(!localStorage.getItem('token')) {
        localStorage.setItem('token', this.registrationForm.get('userName')?.value);
        this.router.navigate(["/"]);
      }
    }
  }

  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    }
  }

}
