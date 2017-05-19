import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';

import 'rxjs/add/operator/map';

@Injectable()
export class SettingsProvider {
    // settings by default
    private defaultSettings = {
        useCase: true
    };

    constructor(private http: Http, private storage: Storage) {
        console.log('Hello SettingsProvider Provider');
    }

    setDefaultSettings() {
        // looking for settings key in local database...
        this.storage.get('settings').then(settings => {
            // if there are no settings yet (first run of app) then pushing some defaults...
            if (!settings) {
                this.storage.set('settings', this.defaultSettings);
            }
        });
    }

    getSettings(){
        return this.storage.get('settings');
    }

}
