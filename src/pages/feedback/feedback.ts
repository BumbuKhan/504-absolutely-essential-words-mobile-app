import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';

import {FeedBackProvider} from "../../providers/feed-back/feed-back";

@Component({
    selector: 'page-feedback',
    templateUrl: 'feedback.html',
})
export class FeedbackPage {
    private formSubmitted = false;
    private message: String = '';

    constructor(private platform: Platform,
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
        });
    }

    ionViewDidLoad(){
        console.log('ionViewDidLoad()');
    }
}
