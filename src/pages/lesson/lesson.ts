import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
})
export class LessonPage {
  private data = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.data.lessonData;
  }
}
