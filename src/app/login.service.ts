import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users = [];
  addToList(product) {
    this.users.push(product);
  }

  getUsers() {
    return this.users;
  }

  clearList() {
    this.users = [];
    return this.users;
  }
  constructor() { }

}