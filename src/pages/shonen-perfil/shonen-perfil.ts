import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ShonenVideoPage } from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-shonen-perfil',
  templateUrl: 'shonen-perfil.html',
})
export class ShonenPerfilPage {

  shonen:any[] = [];
  o1:any[] = [];

  constructor(public navCtrl: NavController, 
              private modelCtrl:ModalController,
              public navParams: NavParams) {

    this.shonen = this.navParams.get("shonen");
    this.o1 = this.shonen['opening']['o1'];
    console.log(this.shonen);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShonenPerfilPage');
  }

  irOpening(){
    this.modelCtrl.create( ShonenVideoPage, {"o1" : this.o1 } ).present();
  }

}
