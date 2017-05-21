import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {Http} from '@angular/http';
import {LessonsProvider} from '../../providers/lessons/lessons';
import {SettingsProvider} from '../../providers/settings/settings';
import {MentionedWordPage} from './word-mention';
import {Platform} from 'ionic-angular';
import {ModalController} from 'ionic-angular';

@Component({
    selector: 'page-lesson',
    templateUrl: 'lesson.html',
    providers: [Http]
})
export class LessonPage {
    private lessonId: Number;
    private lessonTitle: String;
    private words = [];
    private loading = true;
    private useCase = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public platform: Platform,
                public settingsProvider: SettingsProvider,
                public modalCtrl: ModalController,
                public lessonsProvider: LessonsProvider) {

        this.lessonId = this.navParams.data.lessonId;
        this.lessonTitle = this.navParams.data.lessonTitle;
    }

    ionViewWillEnter() {
        this.platform.ready().then(() => {
            this.settingsProvider.getSettings().then(settings => {
                this.useCase = settings.useCase;
            });

            this.lessonsProvider.getWords().then(data => {
                let curLessonsWords = data.filter(item => {
                    return item.lesson_id == this.lessonId;
                });

                this.words = curLessonsWords;
                this.loading = false;
            });
        });
    }

    toggleFavorite(item) {
        item.is_favorite = !item.is_favorite;

        this.lessonsProvider.toggleFavoriteWord(item.id, item.is_favorite);
    }

    openMentionedWordModal() {
        console.log('openMentionedWordModal()');

        let modal = this.modalCtrl.create(MentionedWordPage);
        modal.present();
    }
}
