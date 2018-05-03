import { Component, Input, OnInit} from '@angular/core';
import { Router} from '@angular/router';

import { UserService } from '../user.service';
import { BoldDirective } from '../bold.directive';
import { Goods } from '../goods';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constAmount = 8;
  goodsAmount = this.constAmount;
  
  goods: Goods[] = [];
  
  isGoodsDownloaded = false;
  isNotFounded = false;
  isGoodsOver = false;
  isFiltered = false;
  
  userRoutes;
  
  filterMinPrice;
  filterMaxPrice;
  filterType;
  filterName;
  filterOrderValue = undefined;
  
  constructor(private userService: UserService, private router: Router) {  }
  
  ngOnInit() {
    this.userRoutes = localStorage.getItem("userRules");
    this.getGoods();
  }
  getGoods() {
    this.isNotFounded = false;
    this.isGoodsOver = false;
    this.userService.getGoods(this.goodsAmount)
      .subscribe(res => {
        this.goods = res;
        this.isGoodsDownloaded = true;
        this.isFiltered = false;
        if (res.length < this.goodsAmount) {
          this.isGoodsOver = true;
        }
      });
  }
  
  downloadMoreGoods() {
    if (this.isFiltered) {
      this.goodsAmount += this.constAmount;
      this.filterGoods();
    } else {
      this.goodsAmount += this.constAmount;
      this.getGoods();
    }
  }
  addToBucket(good) {
      var id = good.id;
      let storageStr = sessionStorage.getItem('goodsId');
      if (storageStr == null || storageStr == "") {
        sessionStorage.setItem('goodsId', id);
      } else if (isNotInBucket(id, storageStr)) {
        sessionStorage.setItem('goodsId', storageStr + "," + id);  
      }
      function isNotInBucket(id, storageStr) {
        let storageArr = storageStr.split(",") || [];
        for (let i = 0; i < storageArr.length; i++) {
          if (storageArr[i] == id) {
            return false;
          }
        }
        return true;
      }
  }
  filterGoods() {
    this.userService.goodsFilter(this.filterMinPrice == null ? "undefined" : this.filterMinPrice,
                                 this.filterMaxPrice == null ? "undefined" : this.filterMaxPrice,
                                 this.filterType,
                                 this.filterName == null ? "undefined" : this.filterName,
                                 this.filterOrderValue,
                                 this.goodsAmount)
      .subscribe(res => {
        if (res.length == 0) {
          this.isNotFounded = true;
        } else {
          this.goods = res;
          this.isGoodsDownloaded = true;
          this.isFiltered = true;
          this.isNotFounded = false;
        }
        if (res.length < this.goodsAmount) {
          this.isGoodsOver = true;
        }
      });
  }
  clearFilters() {
    this.filterMinPrice = undefined;
    this.filterMaxPrice = undefined;
    this.filterType = undefined;
    this.filterName = undefined;
    this.filterOrderValue = undefined;
    this.goodsAmount = this.constAmount;
    this.getGoods();
  }
  changeOrder() {
    this.filterOrderValue = !this.filterOrderValue;
    this.filterGoods();
  }
}
