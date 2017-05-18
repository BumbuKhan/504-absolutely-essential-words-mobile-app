import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Http} from '@angular/http';
import {LessonsProvider} from '../../providers/lessons/lessons';

@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
  providers: [Http]
})
export class LessonPage {
  private lessonId: Number;
  private lessonData = {};
  private loading = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lessonsProvider: LessonsProvider) {
    this.lessonId = this.navParams.data.lessonId;
  }

  ionViewDidLoad(){
    this.lessonsProvider.getLessonDataById(this.lessonId).subscribe(data => {
            this.lessonData = data;
            this.loading = false;
        });
  }
}
