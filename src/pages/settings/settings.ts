import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';

import {AboutPage} from '../about/about';
import {FeedbackPage} from '../feedback/feedback';

import {Storage} from '@ionic/storage';
import {Platform} from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage implements OnInit{

  // settings by default
  private defaultSettings = {
    useCase: true
  };

  // current settings
  private settings = {};

  constructor(public navCtrl: NavController, public storage: Storage, public platform: Platform) {}

  ngOnInit(){

    this.platform.ready().then((readySource) => {
      
      // looking for settings key in local database...
      this.storage.get('settings').then(settings => {
        // if there are no settings yet (first run of app) then pushing some defaults...
        if (!settings) {
            this.storage.set('settings', this.defaultSettings);
            this.settings = this.defaultSettings;
        } else {
          this.settings = settings;
        }
      });

    });
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

  useCaseChangeHandler($event){
    // grabbing the toggle's state
    let val = $event.checked;

    // getting current settings...
    this.storage.get('settings').then((settings) => {
      // updating useCase key...
      settings.useCase = val;

      // and then updating whole settings...
      this.storage.set('settings', settings);
    })
  }
}
