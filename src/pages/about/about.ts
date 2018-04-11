import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LaunchNavigator, LaunchNavigatorOptions} from '@ionic-native/launch-navigator';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private launchNavigator: LaunchNavigator) {

  }
  navme(adress){
    this.launchNavigator.navigate(adress);
  }

}
