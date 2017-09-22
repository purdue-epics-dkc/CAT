import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConfirmPage } from '../pages/confirm/confirm';
import { AvatarPage } from '../pages/avatar/avatar';
import { TranscriptPage } from '../pages/transcript/transcript';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConfirmPage,
    AvatarPage,
    TranscriptPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConfirmPage,
    AvatarPage,
    TranscriptPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
