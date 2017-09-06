import { Injectable } from '@angular/core';
import { Game } from './game';
import { GAMES } from './mock-games';

@Injectable()
export class GameService {
  getGames(): Promise<Game[]> {
    return Promise.resolve(GAMES);
  }
  getGamesSlowly(): Promise<Game[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getGames()), 2000);
    })
  }
}
