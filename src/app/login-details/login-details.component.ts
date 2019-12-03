import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { register } from '../register';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent implements OnInit {
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService) { }

  ngOnInit() {
  }

}