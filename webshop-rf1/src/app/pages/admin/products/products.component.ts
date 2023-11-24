import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from 'src/app/shared/services/product.service';
import { NewProductDialogComponent } from './new-product-dialog/new-product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });

    const prod: Product = {
      productId: 15,
      productName: 'dummy',
      price: 200,
      tags: ['Mobile', 'Apple', '128 Gb'],
      description: 'fef',
      imageUrl: 'products_image/iphone_15.jpg',
    };
    //this.productService.createProduct(prod);
  }

  openNewProductDialog(initialedit: string) {
    const dialogRef = this.dialog.open(NewProductDialogComponent, {
      data: initialedit,
    });
  }

  openDialog(product: Product) {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onDelete(product.productId);
      }
    });
  }

  onDelete(productId: number): void {
    this.productService.deleteProductById(productId);
  }
}

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm_dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class ConfirmDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {}
}
