import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MediaPlugin } from 'ionic-native';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConfirmPage } from '../pages/confirm/confirm';
import { AvatarPage } from '../pages/avatar/avatar';
import { TranscriptPage } from '../pages/transcript/transcript';
import { LibraryPage } from '../pages/library/library';
import { AboutPage } from '../pages/about/about';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConfirmPage,
    AvatarPage,
    TranscriptPage,
    LibraryPage,
    AboutPage
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
    TranscriptPage,
    LibraryPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpeechRecognition
  ]
})
export class AppModule {}
