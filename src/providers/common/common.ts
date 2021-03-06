/* The main purpose of this provider is to store lessons, words and e.t.c into local storage */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';

import 'rxjs/add/operator/map';

@Injectable()
export class CommonProvider {

  constructor(public http: Http, private storage: Storage) {
    // this.storage.set('lessons', null);
    // this.storage.set('words', null);
  }

  cacheLessons(callBack) {
    this.storage.get('lessons').then(lessons => {
      /*if (!lessons) {
       // caching lessons...
       this.http.get('http://api.504.bumbu.tv/lessons?expand=words').map(res => res.json()).subscribe(lessons => {

       lessons.items.forEach(function (i, v) {
       i.wordsCount = i.words.length;
       });

       this.storage.set('lessons', lessons);
       callBack();
       });
       } else {
       callBack();
       }*/

      this.http.get('http://api.504.bumbu.tv/lessons?expand=words').map(res => res.json()).subscribe(lessons => {

        lessons.items.forEach(function (i, v) {
          i.wordsCount = i.words.length;
        });

        this.storage.set('lessons', lessons);
        callBack();
      });
    });
  }

  cacheWords() {
    this.storage.get('words').then(words => {
      /*if (!words) {
        // caching words
        this.http.get('http://api.504.bumbu.tv/words').map(res => res.json()).subscribe(words => {

          // I have to add 'is_favorite' key to each item (word), but first I'll drink a cup of tea...
          let res = words.filter((word) => {
            let mutatedWord = word;
            mutatedWord.is_favorite = false;

            return mutatedWord;
          });

          this.storage.set('words', res);
        });
      }*/

      this.http.get('http://api.504.bumbu.tv/words').map(res => res.json()).subscribe(words => {

        // I have to add 'is_favorite' key to each item (word), but first I'll drink a cup of tea...
        let res = words.filter((word) => {
          let mutatedWord = word;
          mutatedWord.is_favorite = false;

          return mutatedWord;
        });

        this.storage.set('words', res);
      });
    });
  }
}
