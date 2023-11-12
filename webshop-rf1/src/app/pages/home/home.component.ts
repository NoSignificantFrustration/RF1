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

  constructor (private productService: ProductService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        const searchTerm = params['searchTerm'].toLowerCase();
        this.productService.getAllProductBySearchTerm(searchTerm).subscribe(products => {
          products.forEach(product => {
            this.productService.getProductImageUrl(product.imageUrl).subscribe(url => {
              product.imageUrl = url;
            });
          });
          this.products = products;
        });
      }else{
          this.productService.getAllProducts().subscribe(products => {
            products.forEach(product => {
              this.productService.getProductImageUrl(product.imageUrl).subscribe(url => {
                product.imageUrl = url;
              });
            });
            this.products = products;
          });


          const prod: Product= {
              productId: 1,
              productName: 'Iphone 15',
              price: 800,
              tags: ['Mobile', 'Apple','128 Gb'],
              description: 'The iPhone, a flagship product from Apple, is celebrated for its elegant design and premium build quality. It runs on the iOS operating system, known for its stability and vast app ecosystem. Equipped with Retina displays, iPhones offer sharp and vibrant visuals. With powerful A13 Bionic chips (or later), they deliver fast and efficient performance. iPhones are celebrated for their high-quality cameras, Face ID security, and seamless integration into the broader Apple ecosystem, ensuring a user-friendly and technologically advanced smartphone experience.',
              imageUrl: 'products_image/iphone_15.jpg'

          }
          // this.productService.createProduct(prod)
    }
    });
  }
}
