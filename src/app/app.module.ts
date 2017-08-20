import {NgModule, ErrorHandler} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {IonicStorageModule} from '@ionic/storage';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {FavoritesPage} from '../pages/favorites/favorites';
import {HomePage} from '../pages/home/home';
import {LessonPage} from '../pages/lesson/lesson';
import {MentionedWordPage} from '../pages/lesson/word-mention';

import {SettingsPage} from '../pages/settings/settings';
import {AboutPage} from '../pages/about/about';
import {FeedbackPage} from '../pages/feedback/feedback';
import {TabsPage} from '../pages/tabs/tabs';
import {PopoverPage} from '../pages/lesson/popover';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {LessonsProvider} from '../providers/lessons/lessons';
import {CommonProvider} from '../providers/common/common';
import {SettingsProvider} from '../providers/settings/settings';
import {FormsModule} from "@angular/forms";
import {FeedBackProvider} from '../providers/feed-back/feed-back';

import {WordMentionPipe} from '../pipes/word-mention.pipe';
import {WordMakeBoldPipe} from '../pipes/word-make-bold.pipe';

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    HomePage,
    LessonPage,
    MentionedWordPage,
    SettingsPage,
    AboutPage,
    FeedbackPage,
    TabsPage,
    PopoverPage,
    WordMentionPipe,
    WordMakeBoldPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    HomePage,
    LessonPage,
    MentionedWordPage,
    SettingsPage,
    AboutPage,
    FeedbackPage,
    TabsPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LessonsProvider,
    CommonProvider,
    SettingsProvider,
    FeedBackProvider
  ]
})
export class AppModule {
}
