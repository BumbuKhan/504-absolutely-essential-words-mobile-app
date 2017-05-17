import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {AboutPage} from '../about/about';
import {FeedbackPage} from '../feedback/feedback';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

  sendFeedback() {
    console.log('sendFeedback() invoked');
    this.navCtrl.push(FeedbackPage);
  }

  rateApp() {
    console.log('rateApp() invoked');
  }

  openAbout() {
    console.log('openAbout() invoked');
    this.navCtrl.push(AboutPage);
  }

  chooseLenguage(){
    console.log('chooseLenguage() invoked');
  }
}
