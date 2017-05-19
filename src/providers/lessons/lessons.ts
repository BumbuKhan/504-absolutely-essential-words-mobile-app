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

    toggleFavoriteWord(wordId, state){
        this.storage.get('words').then(words => {
            let newWords = words.filter((word) => {
                if(word.id == wordId) {
                    word.is_favorite = state;
                }

                return word;
            });

            console.log('newWords', newWords);

            // save back to the storage...
            this.storage.set('words', newWords);
        })
    }
}
