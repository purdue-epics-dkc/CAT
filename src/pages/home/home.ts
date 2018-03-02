import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LibraryPage } from '../library/library';
import { AboutPage } from '../about/about';
import { MediaPlugin } from 'ionic-native';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  media: MediaPlugin = new MediaPlugin('../Library/NoCloud/recording.wav');
  recording: boolean;
  text: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private speech: SpeechRecognition) {
    this.recording = false;
    this.text = "\u25CF";
  }

  speechList: Array<string> = [];

  onRecordButtonPressed() {
    try {
      let media = new MediaPlugin('../Library/NoCloud/recording.wav');
      media.startRecord();
    }
    catch (e) {
      let alert = this.alertCtrl.create({
        title: 'Could not start recording',
        buttons: [
          {
            text: 'Okay',
            role: 'cancel',
            handler: () => {
              console.log('Okay clicked');
            }
          },
        ]
      });
      alert.present();
    }
    }

  listenForSpeech():void {
    this.speech.startListening().subscribe(data => this.speechList = data, error => console.log(error));
  }


  goToLibraryPage() {
    this.navCtrl.push(LibraryPage);
  }

  goToAboutPage() {
    this.navCtrl.push(AboutPage);
  }
}
