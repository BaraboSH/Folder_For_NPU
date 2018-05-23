import { Component, Input, OnInit, DoCheck, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, OnChanges {
  loginedUser: User;
  isUserDownloaded: boolean = false;
  rules;
  backetCount = 0;
  productIdStr;
  searchValue = "";
  searchType = "name";
  
  constructor(private userService: UserService, private router: Router) {}
  
  ngOnInit() { 
    
  }
  ngOnChanges() { }
  
  ngDoCheck() { 
    if (this.isUserDownloaded == false) {
      if (this.getCookieUser()) {
        this.getUser(this.getCookieUser());
      }
    }
    if (this.getCookieProduct()) {
      this.productIdStr = this.getCookieProduct();  
      let productIdArr = this.productIdStr.split(",");
      this.backetCount = productIdArr.length;
    } else {
      this.backetCount = 0;
    }
  }
 
  getUser(id) {
    
    this.userService.getUser(id)
      .subscribe(res => {
        this.isUserDownloaded = true;
        res.map(data => {
          this.loginedUser = data;
          this.rules = localStorage.getItem("userRules");
        });
      });
  }
  
  logout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("userRules");
    sessionStorage.removeItem("goodsId");
    this.isUserDownloaded = false;
    this.rules = null;
    this.router.navigate(['']);
  }
  
  getCookieUser() {
    return localStorage.getItem('userId');
  }
  getCookieProduct() {
    return sessionStorage.getItem('goodsId');
  }
  
  goToProfile(user) {
     this.router.navigate(
        ['profile', 'id' + user.id]
    );
  }
  
}
