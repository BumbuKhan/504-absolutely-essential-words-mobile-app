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
      var item = {word: 'word ' + i, description: 'Lorem ippsum dolor sitamet ' + i};
      this.items.push(item);
    }
  }
}
