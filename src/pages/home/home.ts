import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';

import {LessonPage} from '../lesson/lesson';


import {Lesson} from './lesson';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  private items: Lesson[] = [];

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    // faked data feeding (soon this data will come from service)
    for (var i = 1; i <= 42; i++) {
      var item = {title: 'Lesson ' + i};
      this.items.push(item);
    }
  }

  viewLesson(lessonData) {
    this.navCtrl.push(LessonPage, {lessonData: lessonData});
  }
}
