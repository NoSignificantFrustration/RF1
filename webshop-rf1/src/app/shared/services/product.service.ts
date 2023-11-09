import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsCollection: AngularFirestoreCollection<Product>;
  private products: Observable<Product[]>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
    ) {
    this.productsCollection = afs.collection<Product>('Products');
    this.products = this.productsCollection.valueChanges({ idField: 'productId' });
  }


  //CRUD
  getAllProducts(): Observable<Product[]> {
    return this.products;
  }

  getToolImageUrl(imageUrl: string): Observable<string> {
    const storageRef = this.storage.ref(imageUrl);
    return storageRef.getDownloadURL();
  }
}
