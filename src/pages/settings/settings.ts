import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {AboutPage} from '../about/about';

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
    this.navCtrl.push(AboutPage);
  }
}
