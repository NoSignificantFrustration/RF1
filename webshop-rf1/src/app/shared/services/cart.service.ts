import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Product } from 'src/app/shared/models/Product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart: Cart = new Cart();
  constructor() { }

  addToCart(product: Product): void{
    let cartItem = this.cart.items.find(item => item.product.productId === product.productId);
    if(cartItem){
      this.changeQuantity(product.productId, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(product));
  }

  removeFromCart(productId: number): void{
    this.cart.items =
    this.cart.items.filter(item => item.product.productId != productId);
  }

  changeQuantity(productId:number, quantity: number){
    let cartItem = this.cart.items.find(item => item.product.productId === productId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }

  addToCookie(){

  }
}
