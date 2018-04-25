import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//paginas
import { ShonenPerfilPage } from "../index.paginas";

//servicios
import { FirebaseService } from "../../providers/firebase/firebase";

@IonicPage()
@Component({
  selector: 'page-shonen-categoria',
  templateUrl: 'shonen-categoria.html',
})
export class ShonenCategoriaPage {

  shonen:any[] = [];

  constructor(public navCtrl: NavController, 
              private _fs:FirebaseService,
              public navParams: NavParams) {

    _fs.getShonen().subscribe( shonen => {
      this.shonen = shonen;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShonenCategoriaPage');
  }

  irShonen(idx){
    this.navCtrl.push( ShonenPerfilPage, { "shonen" : this.shonen[idx] } );
  }

}
