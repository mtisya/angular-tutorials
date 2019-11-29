

export class CartComponent implements OnInit {
items;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}