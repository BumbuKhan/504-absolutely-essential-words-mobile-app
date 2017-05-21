import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

import {LessonsProvider} from '../../providers/lessons/lessons';

@Component({
    selector: 'page-word-mention',
    templateUrl: 'word-mention.html',
})
export class MentionedWordPage {
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public lessonsProvider: LessonsProvider) {
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
