import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  collectionName = 'Customers';

  constructor(private afs: AngularFirestore) {}

  create(customer: Customer) {
    return this.afs
      .collection<Customer>(this.collectionName)
      .doc(customer.customerId)
      .set(customer);
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.afs
      .collection<Customer>(this.collectionName)
      .valueChanges({ idField: 'customerId' });
  }

  async deleteCustomerById(customerId: string) {
    return await this.afs.doc(`Customers/${customerId}`).delete();
  }
}
