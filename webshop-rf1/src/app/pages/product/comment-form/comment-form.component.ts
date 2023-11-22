import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/Product';
import { Review } from 'src/app/shared/models/Review';
import { ProductService } from 'src/app/shared/services/product.service';
import { ReviewService } from 'src/app/shared/services/review.service.ts.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})





export class CommentFormComponent implements OnInit {

  
  commentForm = this.formBuilder.group({
    comment: '',
    rating: 5
  });

  user: firebase.default.User | null = null;
  public product:Product | undefined;

   commentTooShort:boolean;
   ratingInvalid:boolean;
   loginInvalid:boolean;
   notLoggedIn:boolean;

constructor(
  private reviewService: ReviewService,
  private formBuilder: FormBuilder,
  private afAuth: AngularFireAuth,
  private router: Router,
  private productService: ProductService, 
  private route:ActivatedRoute
) {
  this.commentTooShort = false;
  this.ratingInvalid = false;
  this.loginInvalid = false;
  

  this.notLoggedIn = true

  let id:string = this.route.snapshot.paramMap.get('productId')|| "";
  if(id != ""){
    this.productService.getProductById(id).subscribe(
      product =>{
        if(product){
          this.product = product;
        } else {
          this.product = undefined;
        }
      });
  } else {
    this.product = undefined;
  }


  
}
  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      console.log("User: " + user);
      this.notLoggedIn = user === null;
    });
    

    
  }



onSubmit(): void{
  console.log(this.product);
  if(this.notLoggedIn){
    this.router.navigateByUrl("/login");
  }


  let comment:string = "";

  if (this.commentForm.controls.comment.value && this.commentForm.controls.comment.value.length > 0) {
    comment = this.commentForm.controls.comment.value;
    this.commentTooShort = false;
  } else {
    this.commentTooShort = true;
  }

  let num:number = Number(this.commentForm.controls.rating.value);

  if (num && !isNaN(num) && num >= 1 && num <= 5) {
    this.ratingInvalid = false;
  } else {
    this.ratingInvalid = true;
  }

  

  if(!this.ratingInvalid && !this.commentTooShort && this.product && this.user){

    
    let review:Review = {} as Review;
    review.comment = comment;
    review.customerId = this.user.uid;
    review.productId = String(this.product.productId);
    review.rating = num;

    this.reviewService.addReview(review);

    this.commentForm.reset();
    
  }
  

  
  
}

}
