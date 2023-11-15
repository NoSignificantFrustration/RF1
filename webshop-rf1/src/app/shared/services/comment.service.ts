import { Injectable } from "@angular/core";
import { AngularFirestoreCollection, AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Comment } from "../models/Comment";
import { ProductService } from "./product.service";

@Injectable({
    providedIn: 'root'
})

 export class CommentService{

    private reviewCollection: AngularFirestoreCollection<Comment>;
    private comments: Observable<Comment[]>;



    
    constructor(
        private afs: AngularFirestore,
        private product: ProductService
        ) {
        this.reviewCollection = afs.collection<Comment>('comments');
        this.comments = this.reviewCollection.valueChanges({ idField: 'productId' });
        this.product = product;
    }

    getAllComments(): Observable<Comment[]>{
        return this.comments;
    }

    addComment(comment:Comment){
        return this.afs.collection<Comment>('Comments').add(comment);
    }


    deleteComment(comment:Comment){
        return this.reviewCollection.doc(String(comment.ID)).delete();
    }

    updateComment(comment:Comment){
        return this.reviewCollection.doc(String(comment.ID)).update({
            "Comment": comment.Comment

        });
        
    }

}

