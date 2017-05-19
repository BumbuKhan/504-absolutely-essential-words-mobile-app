import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';

import {LessonPage} from '../lesson/lesson';
import {Lesson} from './lesson';

import {Http} from '@angular/http';
import {LessonsProvider} from '../../providers/lessons/lessons';

import {Storage} from '@ionic/storage';
import {Platform} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [Http]
})
export class HomePage implements OnInit{
    private items: Lesson[] = [];
    private loading = true;

    // settings by default
    private defaultSettings = {
        useCase: true
    };

    constructor(
        public navCtrl: NavController,
        public storage: Storage,
        public platform: Platform,
        public lessonsProvider: LessonsProvider) {

    }

    ngOnInit(){
        this.platform.ready().then((readySource) => {
      
            // looking for settings key in local database...
            this.storage.get('settings').then(settings => {
                // if there are no settings yet (first run of app) then pushing some defaults...
                if (!settings) {
                    this.storage.set('settings', this.defaultSettings);
                }
            });

        });
    }

    ionViewDidLoad(){
        this.lessonsProvider.getAllLessons().subscribe(data => {
            this.items = data.items;
            this.loading = false;
        });
    }

    viewLesson(lessonId) {
        this.navCtrl.push(LessonPage, {lessonId: lessonId});
    }
}
