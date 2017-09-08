import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from './game';
import { GameService } from './game.service';

@Component({
  selector: 'my-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  games: Game[];
  selectedGame: Game;

  constructor(
    private router: Router,
    private gameService: GameService
  ) { };

  getGames(): void {
    this.gameService.getGamesSlowly().then(games => this.games = games);
  }

  ngOnInit(): void {
    this.getGames();
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedGame.id]);
  }
}
