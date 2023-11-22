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

  getProductImageUrl(imageUrl: string): Observable<string> {
    const storageRef = this.storage.ref(imageUrl);
    return storageRef.getDownloadURL();
  }

  createProduct(product: Product) {
    return this.afs.collection<Product>('Products').add(product);
  }

  capitalizeFirstLetter(str: string): string {
    const  word = str.charAt(0).toUpperCase() + str.slice(1)
    return word;
  

  }
  getAllProductBySearchTerm(searchTerm: string): Observable<Product[]> {
    const capitalizedSearchTerm = this.capitalizeFirstLetter(searchTerm);
    const startAt = capitalizedSearchTerm;
    const endAt = capitalizedSearchTerm + '\uf8ff';
  
    return this.afs.collection<Product>('Products', ref =>
      ref.where('productName', '>=', startAt)
         .where('productName', '<=', endAt)
         .orderBy('productName')
         .limit(5)
    ).valueChanges({ idField: 'productId' });
  }

}
