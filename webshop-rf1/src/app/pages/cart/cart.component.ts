import { Component } from '@angular/core';
import {CartService} from "../../shared/services/cart.service";
import {Cart} from "../../shared/models/Cart";
import {CartItem} from "../../shared/models/CartItem";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { Customer } from 'src/app/shared/models/Customer';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  cart!:Cart;
  fuser: firebase.default.User | null = null;
  customer: Customer | null = null;
  isCustomer: boolean = false;

  constructor(private cartService: CartService,private afAuth: AngularFireAuth, private customerService: CustomerService){
    this.setCart();
  }
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.fuser = user;
        this.customerService.getCustomerbyId(this.fuser.uid).subscribe((customer) => {
          if (customer) {
            this.customer = customer;
            this.isCustomer = true;
        }
      });
    }
  });
  console.log(this.customer)
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
    if(this.isCustomer){
       if (confirm("Véglegesíted a rendelést") == true) {
      this.cartService.createProduct(this.fuser);
      this.cartService.removeAllCart();
      this.setCart()

    } else {
    }
    } else{
      alert("Válj Customerré ahhoz hogy rendelést tudj leadni.")
    }

    console.log(this.cart); // log the cart object to the console
    console.log(this.cart.items);
    console.log()
  }

}
