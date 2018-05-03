import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  user: User;
  userData;
  
  editForm : FormGroup;
  email: string;
  //password: string;
  newPassword: string;
  repeatPassword: string;
  userName: string;
  surname: string;
  image: string;
  adress: string;
  phone: string;
  
  userStatus: boolean = false;
  allDataStatus: boolean = false;
  
  errorPassword = false;
  
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.editForm = formBuilder.group ({
      "email": ["", [Validators.required, Validators.pattern("([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}")]],
      //"password": ["", [Validators.required, Validators.pattern("[a-zA-Z0-9_-]{5,40}")]],
      "newPassword": ["", [ Validators.required, Validators.pattern("[a-zA-Z0-9_-]{5,40}")]],
      "repeatPassword": ["", [Validators.required, Validators.pattern("[a-zA-Z0-9_-]{5,40}")]],
      "userName": ["", [Validators.required, Validators.pattern("[a-zA-ZА-Яа-я]{2,15}")]],
      "surname": ["", [Validators.required, Validators.pattern("[a-zA-ZА-Яа-я]{2,20}")]],
      "image": ["", [Validators.required]],
      "adress": ["", [Validators.required]],
      "phone": ["", [Validators.required,  Validators.pattern("[0-9]{10}")]]
    });
  }
  
  ngOnInit() {
    if (this.getCookie()) {
      this.getUser(this.getCookie());
    }
  }
  
  getUser(id) {
    this.userService.getUser(id)
      .subscribe(res => {
        res.map(data => {
          this.user = data;
          this.userStatus = true;
        });
      });
      this.userService.getEmail(id)
      .subscribe(res => {
        this.userData = res;
        this.allDataStatus = true;
      });
}
  
  getCookie() {
    return localStorage.getItem("userId");
  }
  
  userEdit() {
    this.userService.userEdit(this.getCookie(),
                          this.email ? this.email : this.userData,
                          this.repeatPassword,
                          this.userName ? this.userName : this.user.name,
                          this.surname ? this.surname : this.user.surname,
                          this.image ? this.image : this.user.image,
                          this.adress ? this.adress : this.user.adress,
                          this.phone ? this.phone : this.user.phone).subscribe();
    location.reload();
    this.router.navigate(['']);
  }
  
}
