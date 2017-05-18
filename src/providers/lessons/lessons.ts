import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LessonsProvider {
    constructor(public http: Http) {
    }

    getAllLessons() {
        return this.http.get('http://api.504.bumbu.tv.loc/lessons').map(res => res.json());
    }
}
