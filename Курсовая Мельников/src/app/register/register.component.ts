import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm : FormGroup;
  
  email: string;
  password: string;
  repeatPassword: string;
  userName: string;
  surname: string;
  image: string;
  adress: string;
  phone: string;
  
  errorData = false;
  
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = formBuilder.group ({
      "email": ["", [Validators.required, Validators.pattern("([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}")]],
      "password": ["", [Validators.required, Validators.pattern("[a-zA-Z0-9_-]{5,40}")]],
      "repeatPassword": ["", [Validators.required, Validators.pattern("[a-zA-Z0-9_-]{5,40}")]],
      "userName": ["", [Validators.required, Validators.pattern("[a-zA-ZА-Яа-я]{2,15}")]],
      "surname": ["", [Validators.required, Validators.pattern("[a-zA-ZА-Яа-я]{2,20}")]],
      "image": ["", [Validators.required]],
      "adress": ["", [Validators.required]],
      "phone": ["", [Validators.required,  Validators.pattern("[0-9]{10}")]]
    });
  }
  
  ngOnInit() {
    
  }
  
  userRegister() {
    this.userService.userRegister(this.email,
                                  this.password,
                                  this.userName,
                                  this.surname,
                                  this.image == undefined ? "" : this.image,
                                  this.adress == undefined ? "" : this.adress,
                                  this.phone == undefined ? "" : this.phone
                                 ).subscribe(res => {
      if (res == null) {
        this.errorData = true;
      } else {
        this.errorData = false;
        this.router.navigate(['/login']);
      }
    });
  }
  
}
