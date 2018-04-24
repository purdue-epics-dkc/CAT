import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';


@IonicPage()
@Component({
  selector: 'page-gloves',
  templateUrl: 'gloves.html',
})

// 128 bit UUIDs for our custom Service. See the hardware code for more documentation.
var DeafSigner = {
  device: 'e0:18:16:ac:bc:02',
  service: '09200cd2-e2cd-4210-b647-f022ec29fd47',
  dataEnable: '09200cd3-e2cd-4210-b647-f022ec29fd47',
  rightHand: '09200cd4-e2cd-4210-b647-f022ec29fd47',
};

export class GlovesPage {
  isConnected: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private ble: BLE) {
    // Wait for Bluetooth to be ready.
    document.addEventListener('deviceready', this.connectToGlove, false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GlovesPage');
  }

  connectToGlove(){
    this.scan();
  }

  scan() {
    ble.scan([DeafSigner.device], 10).subscribe(
      (service) => {
        self.onScan(service);
      },

      (err) => {
        console.log('BLE scan failed.');
        alert('Did not find DeafSigner in scan.');
      },
    );
  }

  onScan(service: Observable<Any>) {
    console.log('Found ' + JSON.stringify(service));
    ble.connect(service.id).subscribe(
      (bleStatus) => {
      },
        self.onConnect();
      (err) => {
        self.onDisconnect();
      },
    );
  }

  onConnect() {
    // TODO (?) handle the Promise<Any> returned by write?
    // Write the dataEnable to start the data transfer
    ble.writeWithoutResponse(DeafSigner.device, DeafSigner.service, DeafSigner.dataEnable, [1]);

    // Read all characteristics when RightHand sends a notification.
    ble.startNotification(DeafSigner.device, DeafSigner.service, DeafSigner.rightHand).subscribe(
      (data) => {
        //TODO transfer the buffer to the Azure client.
      },

      (err) => {
        alert('Error in DeafSigner data transfer');
      },
    );

    // TODO Add button to stop transfer, then write [0] to dataEnable. May also need to stopNotification 
    // Then you need to read the output buffer from the backend client.
  }

  onNotification()

  onDisconnect() {
    alert('Lost connection to Deaf Signer.');
  }

}
