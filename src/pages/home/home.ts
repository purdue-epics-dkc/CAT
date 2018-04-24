import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { LibraryPage } from '../library/library';
import { AboutPage } from '../about/about';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChangeDetectorRef } from '@angular/core';
import { AvatarPage } from '../avatar/avatar';
// import { WindowsAzure } from 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  matches: String[];
  isRecording = false;
  WindowsAzure: any;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef) {

    var client = WindowsAzure.MobileServiceClient("https://cat-app.azurewebsites.net")

  }

  isIos() {
    return this.plt.is('ios');
  }
 
  startListening() {
    let options = {
      language: 'en-US'
    }
    this.speechRecognition.startListening().subscribe(matches => {
      this.matches = matches;
      this.cd.detectChanges();
    });
    this.isRecording = true;
  }

  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }

  getPermission(){
    this.speechRecognition.hasPermission()
    .then((hasPermission: boolean) => {
      if (!hasPermission) {
        this.speechRecognition.requestPermission();
      }
    })
  } 
  

  goToLibraryPage() {
    this.navCtrl.push(LibraryPage);
  }

  goToAboutPage() {
    this.navCtrl.push(AboutPage);
  }

  goToAvatarPage() {
    this.navCtrl.push(AvatarPage);
  }
}
