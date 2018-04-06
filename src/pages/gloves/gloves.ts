import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';


@IonicPage()
@Component({
  selector: 'page-gloves',
  templateUrl: 'gloves.html',
})
export class GlovesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private ble: BLE) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GlovesPage');
  }

  connectToGlove(){

  }

  disconnectFromGlove(){
    
  }
}
