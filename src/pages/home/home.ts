import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';
import { LibraryPage } from '../library/library';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  recording: boolean;
  text: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.recording = false;
    this.text = "\u25CF";
  }

  onRecordButtonPressed() {
    if (this.recording == false ) {
      this.recording = true;
      this.text = "\u25A0";   
    } 
    else {this.recording = false;
      this.text = "\u25CF";
      this.navCtrl.push(ConfirmPage);
    }
}

  goToLibraryPage() {
    this.navCtrl.push(LibraryPage);
  }
  
}