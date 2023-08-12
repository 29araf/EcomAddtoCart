import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartItems: any[] = [];
  cartTotal: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
    this.cartService.cartTotal$.subscribe(res =>{
      this.cartTotal = res;
    });
      
  }

  removeFromCart(product : any){
    this.cartService.removeFromCart(product);
  }

}
