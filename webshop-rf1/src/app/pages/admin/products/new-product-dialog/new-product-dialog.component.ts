import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-new-product-dialog',
  templateUrl: './new-product-dialog.component.html',
  styleUrls: ['./new-product-dialog.component.scss'],
})
export class NewProductDialogComponent implements OnInit {
  edit: string = 'default';
  productForm: FormGroup = this.fb.group({
    productId: [null],
    productName: ['', Validators.required],
    price: [null, Validators.required],
    tags: this.fb.array([]),
    description: [''],
    imageUrl: ['products_image/zflip5.jpg', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public initialedit: string
  ) {
    this.edit = initialedit;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const formData = this.productForm.value as Product;
    if (!formData.productName || !formData.price) {
    } else {
      this.productService.createProduct(formData);
    }
  }
}
