import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Review } from "../models/Review";
import { Observable } from "rxjs";

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
        this.reviews = this.reviewCollection.valueChanges({ idField: 'id' });
      }
    

     getReviews(productID: string): Observable<Review[]>{
        console.log("id: " + productID);
        let asd = this.afs.collectionGroup<Review>('Reviews', ref => ref.where('productID', '==', productID)).valueChanges({idField: 'id'});
        
        return asd;
        //return this.afs.collection<Review>('Reviews', ref => ref.where('productID', '==', productID)).valueChanges({idField: 'id'});

    }

    addReview(review: Review){
        return this.afs.collection<Review>('Reviews').add(review);
    }


    deleteReview(reviewId: string){
        return this.reviewCollection.doc(String(reviewId)).delete();
    }

    updateReview(review: Review){
        return this.reviewCollection.doc(String(review.id)).update({
            "rating":  review.rating,
            "comment": review.comment
        });
    }


}


