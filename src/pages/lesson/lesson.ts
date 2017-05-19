import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {Http} from '@angular/http';
import {LessonsProvider} from '../../providers/lessons/lessons';
import {SettingsProvider} from '../../providers/settings/settings';
import {Platform} from 'ionic-angular';

@Component({
    selector: 'page-lesson',
    templateUrl: 'lesson.html',
    providers: [Http]
})
export class LessonPage {
    private lessonId: Number;
    private words = [];
    private loading = true;
    private useCase = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public platform: Platform,
                public settingsProvider: SettingsProvider,
                public lessonsProvider: LessonsProvider) {

        this.lessonId = this.navParams.data.lessonId;
    }

    ionViewDidLoad() {
        /*this.lessonsProvider.getLessonDataById(this.lessonId).subscribe(data => {
         this.lessonData = data;
         this.loading = false;
         });*/

        this.lessonsProvider.getWords().then(data => {
            let curLessonsWords = data.filter(item => {
                return item.lesson_id == this.lessonId;
            });

            this.words = curLessonsWords;
            this.loading = false;
        });
    }

    ionViewWillEnter() {
        this.platform.ready().then(() => {
            this.settingsProvider.getSettings().then(settings => {
                this.useCase = settings.useCase;
            });
        });
    }

    toggleFavorite($event) {
        console.log('toggling...');
    }
}
