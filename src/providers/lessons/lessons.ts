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

    getLessonDataById(id: Number){
        return this.http.get('http://api.504.bumbu.tv/lessons/' + id + '?expand=words').map(res => res.json());
    }
}
