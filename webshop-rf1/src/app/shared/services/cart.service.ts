import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Product } from 'src/app/shared/models/Product';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart: Cart = new Cart();
  private alredyRun: boolean = false;

  constructor(private cookieService: CookieService) {
  }

  addToCart(product: Product): void {
    let cartItem = this.cart.items.find(item => item.product.productId === product.productId);
    if (cartItem) {
      this.changeQuantity(product.productId, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(product));
    this.addCookie();
  }

  removeFromCart(productId: number): void {
    this.cart.items =
      this.cart.items.filter(item => item.product.productId != productId);
  }

  changeQuantity(productId: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.product.productId === productId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    this.addCookie()
  }

  getCart(): Cart {
    return this.cart;
  }

  addCookie() {
    this.cookieService.deleteAll();
    let id = "";
    let toolid = "";
    let quantity = "";
    for (let i = 0; i < this.cart.items.length; i++) {
      id += this.cart.items[i].cardId + ";"
      toolid += this.cart.items[i].product.productId + ";"
      quantity += this.cart.items[i].quantity + ";"
    }
    this.cookieService.set("Id", id);
    this.cookieService.set("ToolId", toolid);
    this.cookieService.set("quantity", quantity);


  }

  reloedCookie(items: Product[]) {
    if (!this.alredyRun) {
      let id = this.cookieService.get("Id");
      let productId = this.cookieService.get("ToolId");
      let quantity = this.cookieService.get("quantity");
      let idt = id.split(";");
      let productidt = productId.split(";")
      let quantityt = quantity.split(";")
      for (let i = 0; i < idt.length; i++) {
        let tool = items.find(item => item.productId == Number(productidt[i]));
        /*
        console.log(idt[i])
        console.log(productidt[i])
        console.log(quantityt[i])
        console.log(tool?.id.toString() + "," + tool?.imageUrl)
         */
        let item
        if (tool) {
          //console.log("ifben")
          item = new CartItem(tool);
          item.quantity = Number(quantityt[i]);
          item.cardId = Number(idt[i])
          this.cart.items.push(item)
        }
      }
      /*
      console.log("after")
      console.log(id)
      console.log(productId)
      console.log(quantity)
       */
      this.alredyRun = true;
    }
  }
}
