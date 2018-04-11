import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user={
    email:"thomas@test.be",
    password:"wachtwoord"
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authService:AuthProvider){

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.authService.login(this.user.email,this.user.password)
    .then(()=>{
            if(this.authService.isLoggedIn){
              this.navCtrl.setRoot(TabsPage);
            }
          });
  }
  loginWithGoogle() {
     this.authService.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(()=>{
       
          this.navCtrl.setRoot(TabsPage);
        
      }).catch(err=>{
        alert(err.message);
      });
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }
}