import { Component, OnInit } from '@angular/core';

import { Game } from './game';
import { GameService } from './game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  games: Game[] = [];

  constructor(private gameServise: GameService) {}

  ngOnInit(): void {
      this.gameServise.getGames()
        .then(games => this.games = games.slice(1, 5));
  }
}