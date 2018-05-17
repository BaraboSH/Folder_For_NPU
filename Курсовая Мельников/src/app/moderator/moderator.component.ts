import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {
  users = [];
  rules;
  amount = 8;
  usersNotFounded = false;
  usersOver = false;
  isSearched = false;
  
  searchName;
  searchSurname;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.amount = 8;
    this.getUsers();
    
    this.rules = localStorage.getItem("userRules");
    if (this.rules != 'moderator')
      this.router.navigate(['']);
  }
  getUsers() {
    this.usersNotFounded = false;
    this.userService.getUsersModerator(this.getCookieUser(), this.amount).subscribe(res => {
      this.users = [];
      res.map(data => {
        this.users.push(data);
      });
      if (res.length < this.amount) {
        this.usersOver = true;
      } 
    });
  }
  getCookieUser() {
    return localStorage.getItem("userId");
  }
  makeOperator(user) {
    this.userService.userMakeOperator(user.id).subscribe(res => {
      if (this.isSearched)
        this.searchUsers();
      else 
        this.getUsers();
    });
  }
  deleteOperator(user) {
    this.userService.userDeleteOperator(user.id).subscribe(res => {
      if (this.isSearched)
        this.searchUsers();
      else 
        this.getUsers();
    });
  }
  deleteUser(user) {
    this.userService.userDelete(user.id).subscribe(res => {
      if (this.isSearched)
        this.searchUsers();
      else 
        this.getUsers();
    });
  }
  searchUsers() {
    this.userService.userSearchModerator(this.searchName = null ? "undefined" : this.searchName,
                                this.searchSurname = null ? "undefined" : this.searchSurname,
                                this.amount)
      .subscribe(res => {
        if (res.length == 0) {
          this.usersNotFounded = true;
        } else {
          this.isSearched = true;
          this.users = [];
          res.map(data => {
            this.users.push(data);
          });
        }
      });
  }
  clearSearch() {
    this.searchName = undefined;
    this.searchSurname = undefined;
    this.amount = 8;
    this.users = [];
    this.getUsers();
  }
  downloadMoreUsers() {
    if (this.isSearched) {
      this.amount += 8;
      this.searchUsers();
    } else {
      this.amount += 8;
      this.getUsers();
    }
  }

}
