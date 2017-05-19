/* The main purpose of this provider is to store lessons, words and e.t.c into local storage */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';

import 'rxjs/add/operator/map';

@Injectable()
export class CommonProvider {

    constructor(public http: Http, private storage: Storage) {
    }

    cacheLessons(callBack){
        this.storage.get('lessons').then(lessons => {
            if (!lessons) {
                // caching lessons...
                this.http.get('http://api.504.bumbu.tv/lessons').map(res => res.json()).subscribe(lessons => {
                    this.storage.set('lessons', lessons);
                    callBack();
                });
            } else {
                callBack();
            }
        });
    }

    cacheWords() {
        this.storage.get('words').then(words => {
            if (!words) {
                // caching words
                this.http.get('http://api.504.bumbu.tv/words').map(res => res.json()).subscribe(words => {
                   this.storage.set('words', words);
                });
            }
        });
    }
}
