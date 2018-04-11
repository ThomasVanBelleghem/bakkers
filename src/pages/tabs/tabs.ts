
import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Events, NavController, Tabs } from 'ionic-angular';
import { BroodPage } from '../brood/brood';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild(Tabs) tabs: Tabs;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = BroodPage;
 

  constructor(private navCtrl:NavController,private events:Events) {

  }
  ionViewDidLoad() {
        console.log('ionViewDidLoad tabsPage');
    
  }
}
