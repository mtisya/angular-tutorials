import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  items;
  loginForm;
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  
    this.checkoutForm = this.formBuilder.group({
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