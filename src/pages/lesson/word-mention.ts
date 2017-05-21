import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

import {LessonsProvider} from '../../providers/lessons/lessons';

@Component({
    selector: 'page-word-mention',
    templateUrl: 'word-mention.html',
})
export class MentionedWordPage {
    constructor(public navParams: NavParams,
                public viewCtrl: ViewController,
                public lessonsProvider: LessonsProvider) {

        let title = this.navParams.data.title;
        console.log(title);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
