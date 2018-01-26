import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-avatar',
  templateUrl: 'avatar.html',
})
export class AvatarPage {
  title: any;
  dictionary: any;
  test: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.title="Fruits "; 
    this.dictionary=new Set();
    this.test="test";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvatarPage');
  }
  goToHomePage() {
    this.navCtrl.push(HomePage);
  }
  onAlertButtonPressed() {
      let alert = this.alertCtrl.create({
        title: 'Enter a title to save this message.',
        inputs: [
          {
            name: 'name',
            placeholder: 'Title'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              this.title=data.name;
// MESSAGE FOR WORKING INPUT
            if((this.title!="")&&(!this.dictionary.has(this.title))){
              this.dictionary.add(this.title);
              let alert = this.alertCtrl.create({
                title: 'Message Saved!',
                message: this.title+' was saved to the Library ',
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
// ERROR MESSAGE FOR NO INPUT
            else if(this.title==""){
              let alert = this.alertCtrl.create({
                title: 'Error!',
                message: 'Please enter a title to save this message',
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
// ERROR MESSAGE FOR DICTIONARY ERROR
            else{
              let alert = this.alertCtrl.create({
                title: 'Error!',
                message: 'Please enter a message title that has not been used',
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
          }
        ]
      });
      alert.present();
    }
}