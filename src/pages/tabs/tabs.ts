import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Platform, AlertController } from 'ionic-angular';

import { HomePage, TodosPage, PerfilPage, CategoriasPage } from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any = CategoriasPage;
  tab2:any = HomePage;

  constructor(public navCtrl: NavController, 
              private menuCtrl:MenuController,
              private platform:Platform,
              private alerCtrl:AlertController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  
  cerrar(){
    this.menuCtrl.close();

    this.alerCtrl.create({
      title: "Estas por salir",
      message : '¿realmente desea salir?',
      buttons : [
        {
          text: 'Aceptar',
          handler: () =>{
            this.platform.exitApp();          
          }
        },
        {
          text: 'Cancelar',
          handler: () =>{
            return;
          }
        }
      ]
    }).present()
  }

  perfil(){
    this.menuCtrl.close();
    this.navCtrl.push( PerfilPage );
  }

}
