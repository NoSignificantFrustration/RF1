
import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Review } from "../models/Review";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";

@Injectable({
    providedIn: 'root'
})

export class ReviewService{

    private reviewCollection: AngularFirestoreCollection<Review>;
    private reviews: Observable<Review[]>;



    
    constructor(
        private afs: AngularFirestore,
        private product: ProductService
        ) {
        this.reviewCollection = afs.collection<Review>('Reviews');
        this.reviews = this.reviewCollection.valueChanges({ idField: 'productId' });
        this.product = product;
      }
    

    getAllReviews(): Observable<Review[]>{
        return this.reviews;
    }

    addReview(review:Review){
        return this.afs.collection<Review>('Reviews').add(review);
    }


    deleteReview(review:Review){
        return this.reviewCollection.doc(String(review.ID)).delete();
    }

    updateReview(review:Review){
        return this.reviewCollection.doc(String(review.ID)).update({
            "Points":  review.Points,
            "Comment": review.Comment
        });
    }


}


