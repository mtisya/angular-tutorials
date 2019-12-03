import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users = [];
  addToList(register) {
    this.users.push(register);
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