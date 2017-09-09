import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Game } from './game';

@Injectable()
export class GameService {
  
  private gamesUrl = 'api/games';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getGames(): Promise<Game[]> {
    return this.http.get(this.gamesUrl)
                .toPromise()
                .then(response => response.json().data as Game[])
                .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  getGamesSlowly(): Promise<Game[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getGames()), 2000);
    })
  }

  getGame(id: number): Promise<Game> {
    const url = `${this.gamesUrl}/${id}`;
    return this.http.get(url)
                .toPromise()
                .then(response => response.json().data as Game)
                .catch(this.handleError);
  }

  update(game: Game): Promise<Game> {
    const url = `${this.gamesUrl}/${game.id}`;
    return this.http
               .put(url, JSON.stringify(game), {headers: this.headers})
               .toPromise()
               .then(() => game)
               .catch(this.handleError)
  }

  create(title: string): Promise<Game> {
    return this.http
                .post(this.gamesUrl, JSON.stringify({name: title}), {headers: this.headers})
                .toPromise()
                .then(res => res.json().data as Game)
                .catch(this.handleError);
  }

  delete(id: number): Promise<Game> {
    const url = `${this.gamesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
                    .toPromise()
                    .then(() => null)
                    .catch(this.handleError);
  }
}
