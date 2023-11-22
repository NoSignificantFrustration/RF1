import { Component } from '@angular/core';
import { Tags } from 'src/app/shared/models/Tags';
import { TagsService } from 'src/app/shared/services/tags.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  tags : Tags [] = [];
  products : Product [] = [];
  constructor(private tagsService: TagsService,private productService:ProductService){

  }
  ngOnInit(): void {
    this.tagsService.getAllTags().subscribe(tags => {
      this.tags = tags;
    });
  }
  getProductByTag(tagId: string, tagName: string) {
    this.productService.getAllProducts().subscribe(products => {
     
      const filteredProducts = products.filter(product => product.tags && product.tags.includes(tagId));

      filteredProducts.forEach(product => {
        this.productService.getProductImageUrl(product.imageUrl).subscribe(url => {
          product.imageUrl = url;
        });
      });
  
     
      this.products = filteredProducts;

    });
    
  }
  
}
