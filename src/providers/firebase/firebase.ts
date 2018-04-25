import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  shonen: Observable<any[]>;

  constructor(private afDB: AngularFireDatabase) {
    console.log('Servicio listo');

    this.getShonen();
  }

  getShonen(){
    return this.shonen = this.afDB.list("shonen").valueChanges();
  }

}
