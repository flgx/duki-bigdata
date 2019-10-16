import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFireDatabase) {}

   getAvatars(){
       return this.db.list('/avatar').valueChanges()
   }

   getUser(userKey){
     return this.db.list('users').snapshotChanges();
   }

   updateUser(userKey, value){
     value.nameToSearch = value.name.toLowerCase();
     return this.db.list('users').update(value,userKey);
   }

   deleteUser(userKey){
     return this.db.list('users').remove();
   }

   getUsers(){
     return this.db.list('users').snapshotChanges();
   }

  getVideos(){
    return this.db.list('duki_videos').valueChanges();
  }

  // searchUsers(searchValue){
  //    return this.db.list('users',ref => ref.childValue('nameToSearch', '>=', searchValue)
  //      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
  //      .snapshotChanges()
  //  }

   searchUsersByAge(value){
     return this.db.list('users',ref => ref.child('age').startAt(value)).snapshotChanges();
   }


   createUser(value, avatar){
     return this.db.list('users').push({
       name: value.name,
       nameToSearch: value.name.toLowerCase(),
       surname: value.surname,
       age: parseInt(value.age),
       avatar: avatar
     });
   }
}
