import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { Goods } from './goods';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  getGoodsUrl = "http://angularserver/goods/getGoods.php";
  getProductUrl = "http://angularserver/goods/getProduct.php";
  getBucketGoodsUrl = "http://angularserver/goods/getBucketGoods.php";
  getOrdersUrl = "http://angularserver/goods/getOrders.php";
  goodsOrderUrl = "http://angularserver/goods/goodsOrder.php";
  goodsOrderBodyUrl = "http://angularserver/goods/goodsOrderBody.php";
  goodsSearchUrl = "http://angularserver/goods/goodsSearch.php";
  goodsFilterUrl = "http://angularserver/goods/goodsFilter.php";
  productEditUrl = "http://angularserver/goods/productEdit.php";
  productDeleteUrl = "http://angularserver/goods/productDelete.php";
  getOrdersOperatorUrl = "http://angularserver/goods/getOrdersOperator.php";
  orderAcceptUrl = "http://angularserver/goods/orderAccept.php";
  orderDeclineUrl = "http://angularserver/goods/orderDecline.php";
  ordersSearchUrl = "http://angularserver/goods/ordersSearch.php";
  productAddUrl = "http://angularserver/goods/productAdd.php";
  
  getUsersUrl = "http://angularserver/users/getUsers.php";
  getUsersModeratorUrl = "http://angularserver/users/getUsersModerator.php";
  getUserUrl = "http://angularserver/users/getUser.php";
  getEmailUrl = "http://angularserver/users/getEmail.php";
  getRulesUrl = "http://angularserver/users/getRules.php";
  getPassUrl = "http://angularserver/users/getPass.php";
  userRegisterUrl = "http://angularserver/users/userRegister.php";
  userLoginUrl = "http://angularserver/users/userLogin.php";
  userEditUrl = "http://angularserver/users/userEdit.php";
  userMakeModeratorUrl = "http://angularserver/users/userMakeModerator.php";
  userDeleteModeratorUrl = "http://angularserver/users/userDeleteModerator.php";
  userDeleteUrl = "http://angularserver/users/userDelete.php";
  userSearchUrl = "http://angularserver/users/userSearch.php";
  userSearchModeratorUrl = "http://angularserver/users/userSearchModerator.php";
  userMakeOperatorUrl = "http://angularserver/users/userMakeOperator.php";
  userDeleteOperatorUrl = "http://angularserver/users/userDeleteOperator.php";
  
  constructor(private httpClient: HttpClient) { }
  
  getGoods(amount): Observable<Goods[]> {
    var body = new FormData();
    body.append('amount', amount);
    return this.httpClient.post<Goods[]>(this.getGoodsUrl, body);
  }
  getProduct(id): Observable<Goods[]> {
    var body = new FormData();
    body.append('id', id);
    return this.httpClient.post<Goods[]>(this.getProductUrl, body);
  }
  getBucketGoods(id): Observable<Goods[]> {
    var body = new FormData();
    body.append('id', id);
    return this.httpClient.post<Goods[]>(this.getBucketGoodsUrl, body);
  }
  goodsOrder(name, surname, adress, phone, email, type, data) {
    var body = new FormData();
    body.append('name', name);
    body.append('surname', surname);
    body.append('adress', adress);
    body.append('phone', phone);
    body.append('email', email);
    body.append('type', type);
    body.append('data', data);
    return this.httpClient.post(this.goodsOrderUrl, body);
  }
  goodsOrderBody(id, productId, name, price, currency, amount, type) {
    var body = new FormData();
    body.append('id', id);
    body.append('productId', productId);
    body.append('name', name);
    body.append('price', price);
    body.append('currency', currency);
    body.append('amount', amount);
    body.append('type', type);
    return this.httpClient.post(this.goodsOrderBodyUrl, body);
  }
  goodsSearch(value, category, amount): Observable<Goods[]> {
    var body = new FormData();
    body.append('value', value);
    body.append('category', category);
    body.append('amount', amount);
    return this.httpClient.post<Goods[]>(this.goodsSearchUrl, body);
  }
  goodsFilter(min, max, type, name, orderValue, amount): Observable<Goods[]> {
    var body = new FormData();
    body.append('min', min);
    body.append('max', max);
    body.append('type', type);
    body.append('name', name);
    body.append('orderValue', orderValue);
    body.append('amount', amount);
    return this.httpClient.post<Goods[]>(this.goodsFilterUrl, body);
  }
  getOrders(email) {
    var body = new FormData();
    body.append('email', email);
    return this.httpClient.post(this.getOrdersUrl, body);
  }
  getOrdersOperator(amount) {
    var body = new FormData();
    body.append('amount', amount);
    return this.httpClient.post(this.getOrdersOperatorUrl, body);
  }
  productEdit(id, name, description, price, currency, image, storage, type) {
    var body = new FormData();
    body.append('id', id);
    body.append('name', name);
    body.append('description', description);
    body.append('price', price);
    body.append('currency', currency);
    body.append('image', image);
    body.append('storage', storage);
    body.append('type', type);
    return this.httpClient.post(this.productEditUrl, body);
  }
  productDelete(id) {
    var body = new FormData();
    body.append('id', id);
    return this.httpClient.post(this.productDeleteUrl, body);
  }
  orderAccept(id) {
    var body = new FormData();
    body.append('id', id);
    return this.httpClient.post(this.orderAcceptUrl, body);
  }
  orderDecline(id) {
    var body = new FormData();
    body.append('id', id);
    return this.httpClient.post(this.orderDeclineUrl, body);
  }
  ordersSearch(name, surname, email, phone, amount) {
    var body = new FormData();
    body.append('name', name);
    body.append('surname', surname);
    body.append('email', email);
    body.append('phone', phone);
    body.append('amount', amount);
    return this.httpClient.post(this.ordersSearchUrl, body);
  }
  productAdd(name, description, price, currency, image, storage, type) {
    var body = new FormData();
    body.append('name', name);
    body.append('description', description);
    body.append('price', price);
    body.append('currency', currency);
    body.append('image', image);
    body.append('storage', storage);
    body.append('type', type);
    return this.httpClient.post(this.productAddUrl, body);
  }
  
  
  
  getUsers(id, amount): Observable<User[]> {
    var body = new FormData();
    body.append('id', id);
    body.append('amount', amount);
    return this.httpClient.post<User[]>(this.getUsersUrl, body);
  }
  getUsersModerator(id, amount): Observable<User[]> {
    var body = new FormData();
    body.append('id', id);
    body.append('amount', amount);
    return this.httpClient.post<User[]>(this.getUsersModeratorUrl, body);
  }
  getUser(id): Observable<User[]> {
    var body = new FormData();
    body.append('id', id);
    return this.httpClient.post<User[]>(this.getUserUrl, body);
  }
  getEmail(id)  {
    var body = new FormData();
    body.append('id', id);
    return this.httpClient.post(this.getEmailUrl, body);
  }
  getRules(id)  {
    var body = new FormData();
    body.append('id', id);
    return this.httpClient.post(this.getRulesUrl, body);
  }
  getPassword(id, password) {
    var body = new FormData();
    body.append('id', id);
    body.append('password', password);
    return this.httpClient.post(this.getPassUrl, body);
  }
  userRegister(email, password, name, surname, image, adress, phone)  {
    var body = new FormData();
    body.append('email', email);
    body.append('password', password);
    body.append('name', name);
    body.append('surname', surname);
    body.append('image', image);
    body.append('adress', adress);
    body.append('phone', phone);
    return this.httpClient.post(this.userRegisterUrl, body);
  }
  userLogin(email, password) {
    var body = new FormData();
    body.append('email', email);
    body.append('password', password);
    return this.httpClient.post(this.userLoginUrl, body);
  }
  userEdit(id, email, password, name, surname, image, adress, phone): Observable<User[]>  {
    var body = new FormData();
    body.append('id', id);
    body.append('email', email);
    body.append('password', password);
    body.append('name', name);
    body.append('surname', surname);
    body.append('image', image);
    body.append('adress', adress);
    body.append('phone', phone);
    return this.httpClient.post<User[]>(this.userEditUrl, body);
  }
  userMakeModerator(id) {
    var body = new FormData();
    body.append('id', id);
    return this.httpClient.post(this.userMakeModeratorUrl, body);
  }
  userDeleteModerator(id) {
    var body = new FormData();
    body.append('id', id);
    return this.httpClient.post(this.userDeleteModeratorUrl, body);
  }
  userDelete(id) {
    var body = new FormData();
    body.append('id', id);
    return this.httpClient.post(this.userDeleteUrl, body);
  }
  userSearch(name, surname, amount): Observable<User[]> {
    var body = new FormData();
    body.append('name', name);
    body.append('surname', surname);
    body.append('amount', amount);
    return this.httpClient.post<User[]>(this.userSearchUrl, body);
  }
  userSearchModerator(name, surname, amount): Observable<User[]> {
    var body = new FormData();
    body.append('name', name);
    body.append('surname', surname);
    body.append('amount', amount);
    return this.httpClient.post<User[]>(this.userSearchModeratorUrl, body);
  }
  userMakeOperator(id) {
    var body = new FormData();
    body.append('id', id);
    return this.httpClient.post(this.userMakeOperatorUrl, body);
  }
  userDeleteOperator(id) {
    var body = new FormData();
    body.append('id', id);
    return this.httpClient.post(this.userDeleteOperatorUrl, body);
  }
}
