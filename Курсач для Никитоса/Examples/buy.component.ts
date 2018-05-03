import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { Goods } from '../goods';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  productNum = 0;
  productId: string;
  productsId: string;
  userId: string;
  orderId;
  
  products: Goods[] = [];
  product: Goods;
  
  user: User;
  userData;
  
  count = 1;
  date = new Date();
  orderData = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + this.date.getDate();
  
  orderForm: FormGroup;
  userName: string;
  surname: string;
  adress: string;
  phone: string;
  email: string;
  deliveryType: string = "Delivery";
  isUserDownloaded = false;
  isUserDataDownloaded = false;
  isProductDownloaded = false;
  
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private formBuilder: FormBuilder) { 
    this.orderForm = formBuilder.group ({
      "email": ["", [Validators.required, Validators.pattern("([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}")]],
      "userName": ["", [Validators.required, Validators.pattern("[a-zA-ZА-Яа-я]{2,15}")]],
      "surname": ["", [Validators.required, Validators.pattern("[a-zA-ZА-Яа-я]{2,20}")]],
      "adress": ["", [Validators.required]],
      "phone": ["", [Validators.required,  Validators.pattern("[0-9]{10}")]],
      "deliveryType": ["", [Validators.required]]
    });
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(queryParamy => {
        this.productId = queryParamy['id'];
        if (this.productId) {
          this.getProduct();    
        } else {
          this.productsId = sessionStorage.getItem("goodsId");
          this.getProducts();
        }
      }
    );
    this.userId = localStorage.getItem("userId");
    if (this.userId != undefined)
      this.getUser();
  }
  
  getProduct() {
    this.userService.getProduct(this.productId)
      .subscribe(res => {
      res.map(data => {
        this.product = data;
        this.isProductDownloaded = true;
      });
    });
  }
  getProducts() {
    this.userService.getBucketGoods(this.productsId)
      .subscribe(res => {
        this.products = res;
        this.product = this.products[this.productNum];
        this.isProductDownloaded = true;
      });
  }
  getUser() {
    this.userService.getUser(this.userId)
      .subscribe(res => {
        res.map(data => {
          this.user = data;
          this.isUserDownloaded = true;
        })
      });
    this.userService.getEmail(this.userId)
      .subscribe(res => {
        this.userData = res;
        this.isUserDataDownloaded = true;
      });
  }
  
  buyProduct() {
    if (this.productNum == 0) {
      this.userService.goodsOrder(this.userName == undefined ? this.user.name :this.userName,
                                  this.surname == undefined ? this.user.surname : this.surname,
                                  this.adress == undefined ? this.user.adress : this.adress,
                                  this.phone == undefined ? this.user.phone : this.phone,
                                  this.email == undefined ? this.userData : this.email,
                                  this.deliveryType,
                                  this.orderData).subscribe(res => {
        this.orderId = res;
        this.userService.goodsOrderBody(this.orderId, this.product.id, this.product.name, (+this.product.price * this.count), this.product.currency, this.count, this.product.type).subscribe();
        if (!this.productId) {
          this.productNum++;
          this.product = this.products[this.productNum];
          this.count = 1;
          document.getElementsByClassName("btn")[1].innerHTML = "Add to order next product";
        } else {
            alert("Your order is sent");
            sessionStorage.removeItem("goodsId");
            this.router.navigate(['']);
          }
      });
    } else if (sessionStorage.getItem("goodsId").split(",").length > this.productNum && !this.productId) {
      this.userService.goodsOrderBody(this.orderId, this.product.id, this.product.name, (+this.product.price * this.count), this.product.currency, this.count, this.product.type).subscribe();
      if (sessionStorage.getItem("goodsId").split(",").length - 1 > this.productNum) {
        this.productNum++;
        this.product = this.products[this.productNum];
        this.count = 1;
      } else if (sessionStorage.getItem("goodsId").split(",").length - 1 == this.productNum) {
        alert("Your order is sent");
        sessionStorage.removeItem("goodsId");
        this.router.navigate(['']);
      }
    }
  }
  emailCheck() {
    if (this.email) {
      if (/([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/.test(this.email)) {
        return true;
      }
    } else {
      if (/([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/.test(this.userData)) {
        return true;
      }
    }
  }
  phoneCheck() {
    if (this.phone) {
      if (/[0-9]{10}/.test(this.phone)) {
        return true;
      }
    } else {
      if (/[0-9]{10}/.test(this.user.phone)) {
        return true;
      }
    }
  }
}
