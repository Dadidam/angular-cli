import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Game } from './game';

@Injectable()
export class GameSearchService {

    constructor(private http: Http) {}

    search(term: string): Observable<Game[]> {
        return this.http.get(`api/games/?name=${term}`)
                        .map(response => response.json().data as Game[]);
    }
}