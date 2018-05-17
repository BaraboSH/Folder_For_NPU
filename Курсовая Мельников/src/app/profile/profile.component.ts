import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string;
  user: User;
  orders = [];
  ordersBody = [];
  userEmail;
  isUserDownloaded = false;
  isOrdersDownloaded = false;
  isUserPage = false;
  error;
  constructor(private route: ActivatedRoute, private userService: UserService) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('idid');
      if (this.getCookie() == this.id.slice(2)) {
        this.getUser(this.getCookie());
        this.userService.getEmail(this.id.slice(2))
          .subscribe(res => {
            this.userEmail = res;
            this.getOrders();
          });
        this.isUserPage = true;
      } else {
        this.getUser(this.id.slice(2));
      }
    });
  }
  getUser(id) {
    this.userService.getUser(id)
      .subscribe(res => {
        res.map(data => {
          this.user = data;
          this.isUserDownloaded = true;
        });
    });
  }
  getOrders() {
    this.userService.getOrders(this.userEmail)
      .subscribe(res => {
      if (res != null) {
        res[0].map(data => {
          this.orders.push(data);
        });
        res[1].map(data => {
          this.ordersBody.push(data);
        });
      } else {
        this.error = true;
      }
    });
  }
  getCookie() {
    return localStorage.getItem("userId");
  }
}
