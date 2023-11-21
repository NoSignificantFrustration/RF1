import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}

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

  onDelete(productId: number): void {
    this.productService.deleteProductById(productId);
  }
}
