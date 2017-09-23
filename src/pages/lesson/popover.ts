import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

@Component({
  template: `
    <ion-item>
      <ion-label>Training</ion-label>
      <ion-toggle checked="false" color="secondary" (ionChange)="trainingModeChangeHandler($event)"></ion-toggle>
    </ion-item>
    <p padding ion-text color="middle" style="margin-top: 0;">In training mode words will be hidden until you tap
      them</p>
  `
})
export class PopoverPage {
  background: string;
  contentEle: any;
  textEle: any;
  fontFamily;
  ulEle;

  colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };

  constructor(private navParams: NavParams) {
  }

  ngOnInit() {
    if (this.navParams.data) {
      this.contentEle = this.navParams.data.contentEle;
      this.textEle = this.navParams.data.textEle;
      this.ulEle = this.navParams.data.ulEle;

      // this.background = this.getColorName(this.contentEle.style.backgroundColor);
      // this.setFontFamily();
    }
  }

  trainingModeChangeHandler(event) {
    console.log(event);

    if(event.checked){
      this.textEle.style.fontSize = 30;
    }
  }

  /*getColorName(background) {
   let colorName = 'white';

   if (!background) return 'white';

   for (var key in this.colors) {
   if (this.colors[key].bg == background) {
   colorName = key;
   }
   }

   return colorName;
   }*/

  /*setFontFamily() {
   if (this.textEle.style.fontFamily) {
   this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, "");
   }
   }*/

  /*changeBackground(color) {
   this.background = color;
   this.contentEle.style.backgroundColor = this.colors[color].bg;
   this.textEle.style.color = this.colors[color].fg;
   }*/

  /*changeFontSize(direction) {
   this.textEle.style.fontSize = direction;
   }*/

  changeFontFamily() {
    if (this.fontFamily) this.textEle.style.fontFamily = this.fontFamily;
  }
}
