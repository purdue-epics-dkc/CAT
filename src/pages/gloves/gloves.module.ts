import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlovesPage } from './gloves';
import { BLE } from '@ionic-native/ble';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicPageModule.forChild(GlovesPage),
  ],
  providers: [
    BLE
  ]
})
export class GlovesPageModule {
  
}
 
