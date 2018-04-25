import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//plugins
import { Facebook } from "@ionic-native/facebook";

//pipe
import { YoutubePipe } from "../pipes/youtube/youtube";

//paginas
import { HomePage, PerfilPage, TabsPage, TodosPage, ShonenPerfilPage, CategoriasPage, ShonenVideoPage,
         ShonenCategoriaPage, LoginPage } from "../pages/index.paginas";

//servicios
import { FirebaseService } from '../providers/firebase/firebase';

//firebase
import { FIREBASECONFIG } from "../config/firebase-data";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    YoutubePipe,
    HomePage, 
    PerfilPage, 
    TabsPage, 
    TodosPage,
    ShonenPerfilPage,
    CategoriasPage,
    ShonenVideoPage,
    ShonenCategoriaPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText      : 'volver',
      iconMode            : 'ios',
      modalEnter          : 'modal-slide-in',
      modalLeave          : 'modal-slide-out',
      pageTransition      : 'ios-transition',
      backButtonIcon      : 'ios-arrow-back'
    }),
    AngularFireModule.initializeApp(FIREBASECONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    PerfilPage, 
    TabsPage, 
    TodosPage,
    ShonenPerfilPage,
    CategoriasPage,
    ShonenVideoPage,
    ShonenCategoriaPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseService
  ]
})
export class AppModule {}
