import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  items;
  loginForm;
  
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.items = this.loginService.getItems();
  
    this.loginForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}