import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';

@Injectable()
export class FeedBackProvider {
    private headers = new Headers({'Content-Type': 'application/json'});
    private API_URL = 'http://api.504.bumbu.tv/feed-back';

    constructor(public http: Http, private storage: Storage) {
        console.log('Hello FeedBackProvider Provider');
    }

    saveFeedBackToLocalStorage(data) {
        this.storage.set('feedBack', data);
    }

    /*sendFeedBackFromLocalStorageToServer() {
        this.storage.get('feedBack').then((feedBack) => {
            if (feedBack) {
                this.http
                    .post(this.API_URL, JSON.stringify(feedBack), {headers: this.headers})
                    .toPromise()
                    .then(() => {
                        // flushing localstorage...
                        this.clearFeedBack();
                    })
                    .catch();
            }
        });
    }*/

    clearFeedBack() {
        this.storage.set('feedBack', null);
    }
}
