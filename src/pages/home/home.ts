import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  private items = [];

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    // faked data feeding (soon this data will come from service)
    for (var i = 1; i <= 42; i++) {
      this.items.push('Lesson ' + i);
    }
  }
}
