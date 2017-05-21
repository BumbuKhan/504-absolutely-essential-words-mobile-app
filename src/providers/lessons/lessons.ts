import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LessonsProvider {
    constructor(public http: Http, private storage: Storage) {
    }

    getAllLessons() {
        return this.storage.get('lessons');
    }

    getWords() {
        return this.storage.get('words');
    }

    toggleFavoriteWord(wordId, state) {
        this.storage.get('words').then(words => {
            let newWords = words.filter((word) => {
                if (word.id == wordId) {
                    word.is_favorite = state;
                }

                return word;
            });

            // save back to the storage...
            this.storage.set('words', newWords);
        })
    }

    getMentionedWord(word) {
        return this.getWords().then((words) => {
            var findedWordObj;

            words.forEach((item) => {
                if (item.word === word) {
                    findedWordObj = item;
                }
            });

            // but in which lesson this word is?
            this.getAllLessons().then((lessons) => {
                lessons.items.forEach((lesson) => {
                    if(lesson.id == findedWordObj.lesson_id) {
                        findedWordObj.lesson_title = lesson.title;
                    }
                })
            });

            return Promise.resolve(findedWordObj);
        })
    }
}
