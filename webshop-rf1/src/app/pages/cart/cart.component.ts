import { Component } from '@angular/core';
import {CartService} from "../../shared/services/cart.service";
import {Cart} from "../../shared/models/Cart";
import {CartItem} from "../../shared/models/CartItem";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  cart!:Cart;
  constructor(private cartService: CartService){
    this.setCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.product.productId);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString: string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.productId, quantity);
    this.setCart();
    console.log(`Changing quantity of tool ${cartItem.product.productId} to ${quantity}`);

  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
  checkout(){
    if (confirm("Véglegesíted a rendelést") == true) {
      this.cartService.removeAllCart();
      this.setCart()
    } else {
    }
    console.log(this.cart); // log the cart object to the console
    console.log(this.cart.items);
    console.log()
  }
}
