import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { Tags } from 'src/app/shared/models/Tags';
import { ProductService } from 'src/app/shared/services/product.service';
import { TagsService } from 'src/app/shared/services/tags.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  products: Product[] = [];
  tags: Tags[] = [];
  //categories: Set<string> = new Set();

  constructor(
    private productService: ProductService,
    private tagsService: TagsService
  ) {}

  ngOnInit(): void {
    this.tagsService.getAllTags().subscribe((tags) => {
      this.tags = tags;
    });
  }
}
