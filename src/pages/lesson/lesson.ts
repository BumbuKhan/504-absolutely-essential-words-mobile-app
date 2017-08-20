import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavParams, ModalController, Platform, PopoverController} from 'ionic-angular';

import {Http} from '@angular/http';
import {LessonsProvider} from '../../providers/lessons/lessons';
import {SettingsProvider} from '../../providers/settings/settings';
import {MentionedWordPage} from './word-mention';
import {PopoverPage} from './popover';

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
  private useCase: Boolean;

  @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
  @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;

  constructor(public navParams: NavParams,
              public platform: Platform,
              public settingsProvider: SettingsProvider,
              public modalCtrl: ModalController,
              public lessonsProvider: LessonsProvider,
              public popoverCtrl: PopoverController) {

    this.lessonId = this.navParams.data.lessonId;
    this.lessonTitle = this.navParams.data.lessonTitle;
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }

  ionViewWillEnter() {
    this.platform.ready().then(() => {
      this.settingsProvider.getSettings().then(settings => {
        this.useCase = settings.useCase;

        if (this.useCase) {
          setTimeout(() => {
            let wordMentions = document.querySelectorAll('.mentioned-word');

            for (var i = 0; i < wordMentions.length; i++) {
              wordMentions[i].removeEventListener('click');
              wordMentions[i].addEventListener('click', (event) => {
                var e = e || window.event;
                var target = e.target || e.srcElement;
                var text = target.textContent || text.innerText;

                this.openMentionedWordModal(text);
              })
            }
          }, 1000);
        }
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

  openMentionedWordModal(word) {

    this.lessonsProvider.getWords().then((words) => {
      var findedWordObj;

      words.forEach((item) => {
        if ((item.word.search(new RegExp(word, 'i')) != -1) || (word.search(new RegExp(item.word, 'i')) != -1)) {
          findedWordObj = item;
        }
      });

      // but in which lesson this word is?
      if (findedWordObj) {
        this.lessonsProvider.getAllLessons().then((lessons) => {
          lessons.items.forEach((lesson) => {
            if (lesson.id == findedWordObj.lesson_id) {
              findedWordObj.lesson_title = lesson.title;
              let profileModal = this.modalCtrl.create(MentionedWordPage, {words: findedWordObj});
              profileModal.present();
            }
          })
        });
      } else {
        console.log('no match...');
      }
    });
  }
}
