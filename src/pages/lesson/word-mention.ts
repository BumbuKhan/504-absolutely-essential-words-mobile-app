import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

import {LessonsProvider} from '../../providers/lessons/lessons';

@Component({
    selector: 'page-word-mention',
    templateUrl: 'word-mention.html',
})
export class MentionedWordPage {
    public lesson;
    public word;
    public wordId;
    public definition;
    public favorite;

    constructor(public navParams: NavParams,
                private lessonsProvider: LessonsProvider,
                public viewCtrl: ViewController) {
    }

    ionViewDidLoad() {
        this.lesson = this.navParams.data.words.lesson_title;
        this.wordId = this.navParams.data.words.id;
        this.word = this.navParams.data.words.word;
        this.definition = this.navParams.data.words.definition;
        this.favorite = this.navParams.data.words.is_favorite;
    }

    toggleFavorite(item) {
        item.is_favorite = !item.is_favorite;

        this.lessonsProvider.toggleFavoriteWord(item.id, item.is_favorite);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
