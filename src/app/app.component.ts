import { Component } from '@angular/core';
import { Game } from './game';

const GAMES: Game[] = [
  { id: 11, name: 'Risen' },
  { id: 12, name: 'Knight & Merchants' },
  { id: 13, name: 'Gothic: Forsaken Gods' },
  { id: 14, name: 'The Witcher' },
  { id: 15, name: 'Half-Life' },
  { id: 16, name: 'Hearthstone' },
  { id: 17, name: 'Warcraft' },
  { id: 18, name: 'Theme Hospital' },
  { id: 19, name: 'Hay Day' },
  { id: 20, name: 'Puzzle Craft' }
];

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My Games</h2>
    <ul class="games">
      <li *ngFor="let game of games" 
        (click)="onSelect(game)" 
        [class.selected]="game === selectedGame">
          <span class="badge">{{game.id}}</span> {{game.name}}
      </li>
    </ul>
    <game-detail [game]="selectedGame"></game-detail>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My favorite games';
  selectedGame: Game;
  games = GAMES;
  onSelect(game: Game): void {
    this.selectedGame = game;
  }
}
