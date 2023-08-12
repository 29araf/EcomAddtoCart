import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);
  private cartTotalSubject = new BehaviorSubject<number>(0);
  public totalPrice: number = 0;
  cart$ = this.cartSubject.asObservable();
  cartTotal$ = this.cartTotalSubject.asObservable();

  constructor() { }

  addItemToCart(item: any) {
    this.cartItems.push(item);
    this.cartSubject.next(this.cartItems);
    this.cartTotal();
  }
  removeFromCart(product : any){
    this.cartItems = this.cartItems.filter(x => x.name != product.name);
    this.cartSubject.next(this.cartItems);
    this.cartTotal();
  }

  cartTotal(){
    let total = 0;
    this.cartItems.forEach(element => {
      total += element.price;
    });
    this.totalPrice = total;
    this.cartTotalSubject.next(this.totalPrice);
  }
  // You can implement other methods like removing items, getting the cart total, etc.
}
