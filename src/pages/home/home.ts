import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {NavController, Platform} from 'ionic-angular';

import {LessonPage} from '../lesson/lesson';
import {CommonProvider} from '../../providers/common/common';
import {SettingsProvider} from '../../providers/settings/settings';
import {LessonsProvider} from '../../providers/lessons/lessons';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [Http]
})
export class HomePage implements OnInit {
    private items = [];
    private loading = true;

    constructor(public navCtrl: NavController,
                public platform: Platform,
                public commonProvider: CommonProvider,
                public lessonsProvider: LessonsProvider,
                public settingsProvider: SettingsProvider) {

    }

    ngOnInit() {
        this.platform.ready().then((readySource) => {
            this.settingsProvider.setDefaultSettings(); // mapping default settings
            this.commonProvider.doCache();              // caching all lessons, words and e.t.c to the local database
        });
    }

    ionViewDidLoad() {
        this.platform.ready().then(() => {
            this.lessonsProvider.getAllLessons().then(data => {
                this.items = data.items;
                this.loading = false;
            });
        });
    }

    viewLesson(lessonId) {
        this.navCtrl.push(LessonPage, {lessonId: lessonId});
    }
}
