import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { GameService } from './game.service';

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
  styleUrls: ['./app.component.css'],
  providers: [GameService],
})
export class AppComponent implements OnInit {
  title = 'My favorite games';
  games: Game[];
  selectedGame: Game;

  constructor(private gameService: GameService) { };

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.gameService.getGamesSlowly().then(games => this.games = games);
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }
}
