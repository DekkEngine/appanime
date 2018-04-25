import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-shonen-video',
  templateUrl: 'shonen-video.html',
})
export class ShonenVideoPage {

  o1:any[] = [];
  letra:any[] = [];

  constructor(public navCtrl: NavController, 
              private viewCtrl:ViewController,
              public navParams: NavParams) {

    this.o1 = this.navParams.get("o1");
    this.letra = this.o1['letra'];
    console.log(this.o1);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShonenVideoPage');
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }

}
