import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';
import { LibraryPage } from '../library/library';
import { MediaPlugin } from 'ionic-native';
import { AboutPage } from '..//about/about';

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
  showAlert(message) {
   let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
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
    try {
    let media = new MediaPlugin('../Library/NoCloud/recording.wav');
    media.startRecord();
    }
    catch (e) {
      this.showAlert('Could not start recording.');
    }
}



  goToLibraryPage() {
    this.navCtrl.push(LibraryPage);
  }

  goToAboutPage() {
    this.navCtrl.push(AboutPage);
  }
  
}