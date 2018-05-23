import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Goods } from '../goods';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  
  editForm : FormGroup;

  productName: string;
  description: string;
  price: number;
  currency: number;
  image: string;
  storage: number;
  type: string;
  
  
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.editForm = formBuilder.group ({
      "productName": ["", [Validators.required]],
      "description": ["", [Validators.required]],
      "price": ["", [Validators.required, Validators.pattern("[0-9]{1,10}")]],
      "currency": ["", [Validators.required]],
      "image": ["", [Validators.required]],
      "storage": ["", [Validators.required,  Validators.pattern("[0-9]{1,10}")]],
      "type": ["", [Validators.required]]
    });
  }
  
  ngOnInit() {
    if (localStorage.getItem("userRules") != 'moderator')
      this.router.navigate(['']);
  }

  
  productEdit() {
    this.userService.productAdd(
                          this.productName,
                          this.description,
                          this.price,
                          this.currency,
                          this.image,
                          this.storage,
                          this.type).subscribe();
    this.router.navigate(['']);
  }
}
