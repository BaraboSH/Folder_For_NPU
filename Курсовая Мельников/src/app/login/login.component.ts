import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm : FormGroup;
  email: string;
  password: string;
  errorData = false;
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
   this.loginForm = formBuilder.group ({
      "email": ["", [Validators.required, Validators.pattern("([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}")]],
      "password": ["", [Validators.required, Validators.pattern("[a-zA-Z0-9_-]{5,40}")]]
    });
  }
  
  ngOnInit() {
    
  }
  sendLogin() {
    this.userService.userLogin(this.email, this.password).subscribe(res => {
      if (res == null) {
        this.errorData = true;
      } else {
        this.errorData = false;
        localStorage.setItem("userId", res[0]);
        this.userService.getRules(localStorage.getItem("userId")).subscribe(res => {
          localStorage.setItem("userRules", "" + res);
        });
        this.router.navigate(['']);
      }
    });
  }

}
