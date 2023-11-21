import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ReviewService } from 'src/app/shared/services/review.service.ts.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private productService: ProductService, private reviewService: ReviewService){}


}
