import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Goods } from '../goods';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  
  product: Goods;
  
  editForm : FormGroup;
  
  id;
  productName: string;
  description: string;
  price: number;
  currency: number;
  image: string;
  storage: number;
  type: string;
  
  isProductDownloaded: boolean = false;
  
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
    if (localStorage.getItem("userRules") == 'moderator') {
        this.route.paramMap.subscribe(params => {
        this.id = params.get('idid').slice(2);
        this.getProduct();
      });
    } else {
      this.router.navigate(['']);
    }
  }
  
  getProduct() {
    this.userService.getProduct(this.id)
      .subscribe(res => {
        res.map(data => {
          this.product = data;
          this.isProductDownloaded = true;
        });
      });
  }
  
  productEdit() {
    this.userService.productEdit(this.id,
                          this.productName ? this.productName : this.product.name,
                          this.description ? this.description : this.product.description,
                          this.price ? this.price : this.product.price,
                          this.currency ? this.currency : this.product.currency,
                          this.image ? this.image : this.product.image,
                          this.storage ? this.storage : this.product.storage,
                          this.type ? this.type : this.product.type).subscribe();
    this.router.navigate(['/product/', ("id" + this.id)]);
  }
  deleteProduct() {
    this.userService.productDelete(this.id).subscribe();
    this.router.navigate(['']);
  }
  
}
