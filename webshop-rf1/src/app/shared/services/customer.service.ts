import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  collectionName = 'Customers';
  private CustomerCollection: AngularFirestoreCollection<Customer>;

  constructor(private afs: AngularFirestore) {
    this.CustomerCollection = afs.collection<Customer>('Customers');
  }

  create(customer: Customer) {
    return this.afs.collection<Customer>(this.collectionName).doc(customer.customerId).set(customer);
  }
}
