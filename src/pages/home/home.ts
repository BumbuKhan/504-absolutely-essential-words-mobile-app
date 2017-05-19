import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {LessonPage} from '../lesson/lesson';
import {Lesson} from './lesson';

import {Http} from '@angular/http';
import {LessonsProvider} from '../../providers/lessons/lessons';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [Http]
})
export class HomePage {
    private items: Lesson[] = [];
    private loading = true;

    constructor(
        public navCtrl: NavController,
        public lessonsProvider: LessonsProvider) {

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
