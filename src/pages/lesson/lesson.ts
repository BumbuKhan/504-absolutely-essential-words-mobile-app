import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Http} from '@angular/http';
import {LessonsProvider} from '../../providers/lessons/lessons';
import {Storage} from '@ionic/storage';
import {Platform} from 'ionic-angular';

@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
  providers: [Http]
})
export class LessonPage {
  private lessonId: Number;
  private lessonData = {};
  private loading = true;
  private useCase = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public platform: Platform,
    public lessonsProvider: LessonsProvider) {

    this.lessonId = this.navParams.data.lessonId;
  }

  ionViewDidLoad(){
    this.lessonsProvider.getLessonDataById(this.lessonId).subscribe(data => {
            this.lessonData = data;
            this.loading = false;
        });
  }

  ionViewWillEnter(){
    this.platform.ready().then(() => {
      this.storage.get('settings').then(settings => {
        this.useCase = settings.useCase;
      })
    });
  }

  toggleFavorite($event){
    console.log('toggling...');
  }
}
