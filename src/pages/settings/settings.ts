import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

  sendFeedback() {
    console.log('sendFeedback() invoked');
  }

  rateApp() {
    console.log('rateApp() invoked');
  }

  openAbout() {
    console.log('openAbout() invoked');
  }
}
