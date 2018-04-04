import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlovesPage } from './gloves';

@NgModule({
  declarations: [
    GlovesPage,
  ],
  imports: [
    IonicPageModule.forChild(GlovesPage),
  ],
})
export class GlovesPageModule {}
