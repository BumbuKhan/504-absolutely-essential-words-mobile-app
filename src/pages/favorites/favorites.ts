import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';

import {FavoriteWord} from './favorite-word';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage implements OnInit {
  private items: FavoriteWord[] = [];

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    // faked data feeding (soon this data will come from service)
    for (var i = 1; i <= 20; i++) {
      var item = {word: 'word ' + i, description: i + ' Lorem ippsum dolor sitamet, what if the text will be too long?'};
      this.items.push(item);
    }
  }

  showFavorite(){
    console.log('Showing expanded data...');
  }

  removeFromFavorite($event){
    console.log('Removing from favorite list...');
    $event.stopPropagation();
  }
}
