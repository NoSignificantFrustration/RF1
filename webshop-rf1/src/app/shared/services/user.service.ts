import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';

  constructor(private afs: AngularFirestore) { }

  create(user: User){
    return this.afs.collection<User>(this.collectionName).doc(user.userId).set(user);
  }

  getUserById(id:string): Observable<User | undefined>{
      return this.afs.doc<User>(`Users/${id}`).valueChanges();
  }
}
