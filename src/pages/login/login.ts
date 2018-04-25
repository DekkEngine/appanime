import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';

//paginas
import { TabsPage } from "../index.paginas";

//plugin
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  perfil:any = [];

  constructor(public navCtrl: NavController, 
              private fb:Facebook,
              private platform:Platform,
              private toastCtrl:ToastController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginwithfb(){

    if (this.platform.is('cordova')) {
      this.fb.login(["public_profile", "email"]).then( (fb:FacebookLoginResponse) =>{
        this.fb.api("/me?fields=id,name,first_name,last_name,cover,picture,permissions",['public_profile'])
        .then( perfil => {
          this.perfil = perfil;
        }).catch( err => {err} );
      }).catch( err => {err} );
    } else {
      this.showToast( "Estas en pc :D" );
    }
  }

  irTab(){
    this.navCtrl.setRoot( TabsPage );
  }

  showToast(mensaje){
    this.toastCtrl.create({
      message : mensaje,
      duration : 3000
    }).present();
  }

}
