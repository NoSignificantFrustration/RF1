import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Product } from 'src/app/shared/models/Product';
import { Purchase } from 'src/app/shared/models/Purchase';
import { PurchasedProduct } from 'src/app/shared/models/purchasedProduct';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { PurchaseService } from 'src/app/shared/services/purchase.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  purchases: Purchase[] = [];
  products: Product[] = [];
  purchasedProducts: PurchasedProduct[] = [];
  user: firebase.default.User | null = null;

  constructor(private userService: UserService,
    private purchaseService: PurchaseService,
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
    });
    if (this.user) {
      // Itt gecire user ID alapjan kérem le a customer ID helyett xd na maaaaajd
      this.purchaseService.getPurchasesByCustomerId(this.user.uid).subscribe(purchases => this.purchases = purchases);
    }
    this.purchases.forEach(purchase => {
      let productxd: Product | undefined;

      this.productService.getProductById(purchase.productId).subscribe(product => productxd = product)
      if(productxd){
        let actualProduct = productxd;
        this.productService.getProductImageUrl(actualProduct.imageUrl).subscribe(dowloadUrl => actualProduct.imageUrl = dowloadUrl);
        productxd = actualProduct;
      }

      this.purchasedProducts.push({
        imageUrl: productxd?.imageUrl || "",
        productName: productxd?.productName || "",
        date: purchase.date
      })
    });
  }

}
