import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the BroodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brood',
  templateUrl: 'brood.html',
})
export class BroodPage {
  stores:Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: FireDataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BroodPage');
    this.stores=this.db.getAll();
    this.stores.subscribe((result)=>{
           console.log("got this data from provider",result);
          },(error)=>{
            console.log("Didn't get any data",error);
          })

  }

}
