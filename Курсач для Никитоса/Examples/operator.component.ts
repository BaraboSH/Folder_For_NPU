import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  constAmount = 3;
  ordersAmount = this.constAmount;
  
  getOrdersError = false;
  searchError = false;
  isSearched = false;
  isOrdersOver = false;
  
  userId;
  orders = [];
  ordersBody = [];

  searchName;
  searchSurname;
  searchEmail;
  searchNumber;
  
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.getOrders();
  }
  
  getOrders() {
    this.searchError = false;
    this.isOrdersOver = false;
    this.userService.getOrdersOperator(this.ordersAmount)
      .subscribe(res => {
      if (res != null) {
        this.orders = [];
        this.ordersBody = [];
        this.isSearched = false;
        this.getOrdersError = false;
        res[0].map(data => {
          this.orders.push(data);
        });
        res[1].map(data => {
          this.ordersBody.push(data);
        });
        if (res[0].length < this.ordersAmount) {
          this.isOrdersOver = true;
        }
      } else {
        this.orders = [];
        this.ordersBody = [];
        this.getOrdersError = true;
      }
    });
  }
  
  orderAccept(order) {
    this.userService.orderAccept(order.id).subscribe();
    this.getOrders();
  }
  orderDecline(order) {
    this.userService.orderDecline(order.id).subscribe();
    this.getOrders();
  }
  searchOrders() {
    this.userService.ordersSearch(this.searchName == null ? "undefined" : this.searchName,
                                  this.searchSurname == null ? "undefined" : this.searchSurname,
                                  this.searchEmail == null ? "undefined" : this.searchEmail,
                                  this.searchNumber == null ? "undefined" : this.searchNumber,
                                  this.ordersAmount)
      .subscribe(res => {
      if (res != null) {
        this.searchError = false;
        this.isSearched = true;
        this.orders = [];
        this.ordersBody = [];
        res[0].map(data => {
          this.orders.push(data);
        });
        res[1].map(data => {
          this.ordersBody.push(data);
        });
        if (res[0].length < this.ordersAmount) {
          this.isOrdersOver = true;
        }
      } else {
        this.searchError = true;
      }
    });
  }
  clearSearch() {
    this.searchName = undefined;
    this.searchSurname = undefined;
    this.searchEmail = undefined;
    this.searchNumber = undefined;
    this.ordersAmount = this.constAmount;
    this.getOrders();
  }
  downloadMoreOrders() {
    if (this.isSearched) {
      this.ordersAmount += this.constAmount;
      this.searchOrders();
    } else {
      this.ordersAmount += this.constAmount;
      this.getOrders();
    }
  }
}
