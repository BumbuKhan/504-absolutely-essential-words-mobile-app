import {Component} from '@angular/core';
import {ViewController, Platform, NavParams} from 'ionic-angular';

@Component({
    selector: 'modal-favorite',
    templateUrl: './modal-favorite.html',

})
export class ModalFavorite {
    word: String = '';

    constructor(public viewCtrl: ViewController,
                public platform: Platform,
                public navParams: NavParams) {

        this.word = this.navParams.data.word;
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
