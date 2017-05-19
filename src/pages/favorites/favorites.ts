import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {LessonsProvider} from '../../providers/lessons/lessons';

@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html'
})
export class FavoritesPage {
    private items = [];

    constructor(public navCtrl: NavController, private lessonsProvider: LessonsProvider) {}

    ionViewWillEnter(){
        this.lessonsProvider.getWords().then(words => {
            let res = words.filter(word => {
                if(word.is_favorite){
                    return word;
                }
            });

            this.items = res;
        });
    }

    removeFromFavorite($event) {
        console.log('Removing from favorite list...');
        $event.stopPropagation();
    }

    toggleFavorite(item) {
        item.is_favorite = !item.is_favorite;

        this.lessonsProvider.toggleFavoriteWord(item.id, item.is_favorite);
    }
}
