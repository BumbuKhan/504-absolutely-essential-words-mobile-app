import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {Headers, Http} from '@angular/http';

@Component({
    selector: 'page-feedback',
    templateUrl: 'feedback.html',
})
export class FeedbackPage {
    private message: String = '';

    private headers = new Headers({'Content-Type': 'application/json'});
    private API_URL = 'http://api.504.bumbu.tv/feed-back';

    constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private http: Http) {
    }

    onSubmit() {
        this.platform.ready().then((platformData) => {

            let data = {
                message: this.message,
                phone_data: platformData,
                add_datetime: new Date().toString()
            };

            this.http
                .post(this.API_URL, JSON.stringify(data), {headers: this.headers})
                .toPromise()
                .then(res => console.log(data))
                .catch();

        });
    }
}
