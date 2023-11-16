
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
        private afs: AngularFirestore
        ) {
        this.reviewCollection = afs.collection<Review>('Reviews');
        this.reviews = this.reviewCollection.valueChanges({ idField: 'ID' });
      }
    

    getReviews(productID:string): Observable<Comment[]>{
        return this.afs.collection<Comment>('reviews', ref => ref.where('productID', '==', String(productID))).valueChanges({idField: 'ID'});
    }

    addReview(review:Review){
        return this.afs.collection<Review>('Reviews').add(review);
    }


    deleteReview(reviewID:string){
        return this.reviewCollection.doc(String(reviewID)).delete();
    }

    updateReview(review:Review){
        return this.reviewCollection.doc(String(review.ID)).update({
            "rating":  review.rating,
            "comment": review.comment
        });
    }


}


