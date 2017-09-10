import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  recording: boolean;
  text: string;
  constructor(public navCtrl: NavController) {
    this.recording = false;
    this.text = "Record";
  }

  onRecordButtonPressed() {
    if (this.recording == false ) {
      this.recording = true;
      this.text = "Stop";
    } else {
      this.recording = false;
      this.text = "Record";
      this.navCtrl.push(ConfirmPage);
    }
  }
}
