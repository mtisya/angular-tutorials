import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  items = [];
  addToCart(register) {
    this.items.push(register);
  }

  getItems() {
    return this.items;
  }

  clearLogin() {
    this.items = [];
    return this.items;
  }
 constructor(
    private http: HttpClient
  ) {}
}