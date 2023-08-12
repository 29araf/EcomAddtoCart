import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {


  products: any[] = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 11.99 },
    { id: 3, name: 'Product 3', price: 12.99 },
    { id: 4, name: 'Product 4', price: 13.99 },
    { id: 5, name: 'Product 5', price: 14.99 },
    
  ];

  constructor(private cartService: CartService) { }
  
  addToCart(product: any) {
    this.cartService.addItemToCart(product);
  }

}
