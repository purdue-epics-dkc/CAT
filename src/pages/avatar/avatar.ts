import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SavedPage} from '../saved/saved';
import { AlertController } from 'ionic-angular';
import { LibraryPage } from '../library/library';

@IonicPage()
@Component({
  selector: 'page-avatar',
  templateUrl: 'avatar.html',
})
export class AvatarPage {
  title: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.title="Fruits ";
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
          }
        ]
      });
      alert.present();
    }
    
  onSaveButtonPressed(){

  }
}