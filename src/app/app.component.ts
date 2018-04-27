import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

declare var WindowsAzure: any;
//var client = new WindowsAzure.MobileServiceClient("https://cat-app.azurewebsites.net");

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
