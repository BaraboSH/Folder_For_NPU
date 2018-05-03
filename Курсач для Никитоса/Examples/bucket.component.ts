import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Goods } from '../goods';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  idGoods;
  goods: Goods[] = [];
  isProductDownloaded: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    if (this.getCookieProduct()) {
      this.idGoods = this.getCookieProduct();
      this.userService.getBucketGoods(this.idGoods).subscribe(res => {
        this.goods = res;
        this.isProductDownloaded = true;
      });
    }
  }
  
  getCookieProduct() {
    return sessionStorage.getItem('goodsId');
  }
  
  isBucketEmpty() {
    if (this.getCookieProduct() == "" || this.getCookieProduct() == null) {
      return true;
    } else {
      return false;
    }
  }
  
  deleteProduct(product) {
    let storageArr = sessionStorage.getItem('goodsId').split(",");
    storageArr.splice(storageArr.indexOf(product.id), 1);
    let storageStr = storageArr.join(",");
    sessionStorage.setItem('goodsId', storageStr);
    var parentBlock = document.getElementsByClassName("row")[0];
    var childrenCollection = parentBlock.children;
    for (var i = 0; i < childrenCollection.length; i++) {
      if (childrenCollection[i].getAttribute("id") == product.id) {
        parentBlock.removeChild(childrenCollection[i]);
      }
    }
  }
  clearStorage() {
    sessionStorage.clear();
  }

}
