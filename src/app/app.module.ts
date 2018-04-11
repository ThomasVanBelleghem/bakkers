import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import {LaunchNavigator} from '@ionic-native/launch-navigator'; 
import { FireDataServiceProvider } from '../providers/fire-data-service/fire-data-service';
import{BroodPage} from '../pages/brood/brood';





var config = {
  apiKey: "AIzaSyCDkcxmzhDUJX_1iGY5fgOKYn3yZ5J2Y4s",
  authDomain: "bakkerapp-2b5bc.firebaseapp.com",
  databaseURL: "https://bakkerapp-2b5bc.firebaseio.com",
  projectId: "bakkerapp-2b5bc",
  storageBucket: "bakkerapp-2b5bc.appspot.com",
  messagingSenderId: "911557147129"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    BroodPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    BroodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    LaunchNavigator,
    FireDataServiceProvider
  ]
})
export class AppModule {}
