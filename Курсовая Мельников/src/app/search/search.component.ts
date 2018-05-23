import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Goods } from '../goods';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchValue;
  searchCategory;
  searchAmount = 8;
  goods: Goods[] = [];
  isGoodsDownloaded = false;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParamy => {
        this.searchValue = queryParamy['value'];
        this.searchCategory = queryParamy['type'];
        this.searchAmount = 8;
        this.searchGoods();
      }
    );
  }
  searchGoods() {
    this.userService.goodsSearch(this.searchValue, this.searchCategory, this.searchAmount)
      .subscribe(res => {
        if (res.length != 0) {
          this.goods = res;
          this.isGoodsDownloaded = true;
        }
      });
  }
  searchMoreGoods() {
    this.searchAmount += 8;
    this.searchGoods();
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

}
