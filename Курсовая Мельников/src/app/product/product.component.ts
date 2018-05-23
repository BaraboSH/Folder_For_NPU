import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Goods } from '../goods';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: string;
  product: Goods;
  isProductDownloaded = false;
  
  constructor(private route: ActivatedRoute, private userService: UserService) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('idid');
      this.getProduct();
    });
    
  }
  getProduct() {
    this.userService.getProduct(+this.id.slice(2))
      .subscribe(res => {
          res.map(data => {
            this.product = data;
            this.isProductDownloaded = true;
          });
      });
  }

  addToBucket() {
      let storageStr = sessionStorage.getItem('goodsId');
      if (storageStr == null || storageStr == "") {
        sessionStorage.setItem('goodsId', this.id.slice(2));
      } else if (isNotInBucket(this.id.slice(2), storageStr)) {
        sessionStorage.setItem('goodsId', storageStr + "," + this.id.slice(2));  
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