import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {FavoritesPage} from '../pages/favorites/favorites';
import {ModalFavorite} from '../pages/favorites/modal/modal-favorite';
import {HomePage} from '../pages/home/home';
import {LessonPage} from '../pages/lesson/lesson';
import {SettingsPage} from '../pages/settings/settings';
import {AboutPage} from '../pages/about/about';
import {FeedbackPage} from '../pages/feedback/feedback';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HttpModule} from '@angular/http';
import {LessonsProvider} from '../providers/lessons/lessons';

@NgModule({
    declarations: [
        MyApp,
        FavoritesPage,
        ModalFavorite,
        HomePage,
        LessonPage,
        SettingsPage,
        AboutPage,
        FeedbackPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        FavoritesPage,
        ModalFavorite,
        HomePage,
        LessonPage,
        SettingsPage,
        AboutPage,
        FeedbackPage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        LessonsProvider,
    ]
})
export class AppModule {
}
