import {Component, OnInit} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';

import {FavoriteWord} from './favorite-word';
import {ModalFavorite} from './modal/modal-favorite';

@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html'
})
export class FavoritesPage implements OnInit {
    private items: FavoriteWord[] = [];

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    }

    ngOnInit() {
        // faked data feeding (soon this data will come from service)
        for (var i = 1; i <= 20; i++) {
            var item = {
                word: 'word ' + i,
                description: i + ' Lorem ippsum dolor sitamet, what if the text will be too long?'
            };
            this.items.push(item);
        }
    }

    showFavorite(data) {
        let modal = this.modalCtrl.create(ModalFavorite, {word: data.word});
        modal.present();
    }

    removeFromFavorite($event) {
        console.log('Removing from favorite list...');
        $event.stopPropagation();
    }
}
