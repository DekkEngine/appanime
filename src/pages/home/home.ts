import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//paginas
import { ShonenPerfilPage } from "../index.paginas";

//servicios
import { FirebaseService } from "../../providers/firebase/firebase";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shonen:any[] = [];

  constructor(public navCtrl: NavController,
              private _fs:FirebaseService) {


    _fs.getShonen().subscribe( shonen => {
      this.shonen = shonen;
    });
  }

  irShonen(idx){
    this.navCtrl.push( ShonenPerfilPage, { "shonen" : this.shonen[idx] } );
  }

}
