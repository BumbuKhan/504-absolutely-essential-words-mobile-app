import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {Headers, Http} from '@angular/http';

import {FeedBackProvider} from "../../providers/feed-back/feed-back";

@Component({
    selector: 'page-feedback',
    templateUrl: 'feedback.html',
})
export class FeedbackPage {
    private formSubmitted = false;
    private message: String = '';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private platform: Platform,
                private feedBackProvider: FeedBackProvider) {

        this.feedBackProvider.clearFeedBack();
    }

    onSubmit() {
        this.platform.ready().then((platformData) => {

            let data = {
                message: this.message,
                phone_data: platformData,
                add_datetime: new Date().toString()
            };

            this.feedBackProvider.saveFeedBackToLocalStorage(data);
            this.formSubmitted = true;

            /*this.http
             .post(this.API_URL, JSON.stringify(data), {headers: this.headers})
             .toPromise()
             .then(res => console.log(data))
             .catch();*/
        });
    }

    ionViewDidLoad(){
        console.log('ionViewDidLoad()');
    }
}
