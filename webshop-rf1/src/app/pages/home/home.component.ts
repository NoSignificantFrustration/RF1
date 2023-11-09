import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  products: Product[] = [];

  constructor (private productService: ProductService, private route:ActivatedRoute){
    console.log("szar")
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products => {
      products.forEach(product => {
        this.productService.getToolImageUrl(product.imageUrl).subscribe(url => {
          product.imageUrl = url;
        });
      });
      this.products = products;
    });
    
  }
}
