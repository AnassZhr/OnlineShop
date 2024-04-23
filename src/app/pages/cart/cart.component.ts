import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl:'./cart.component.html'
})
export class CartComponent {
  cart: Cart = {items: [{
    product: 'https://via.placeholder.com/150',
    name: 'Lindt',
    price:  5,
    quantity: 8560,
    id: 1
  },
  {
    product: 'https://via.placeholder.com/150',
    name: 'Lindt',
    price:  5,
    quantity: 85,
    id: 1
  }
]};
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
  
  getTotal(items: Array<CartItem>): number {
    return items.

    map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0)

  }
}
