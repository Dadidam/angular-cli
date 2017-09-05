import { Component, Input } from '@angular/core';
import { Game } from './game';

@Component({
    selector: 'game-detail',
    template: `
      <div *ngIf="game">
        <h2>{{game.name}} details!</h2>
        <div><label>id: </label>{{game.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="game.name" placeholder="name">
        </div>
      </div>
    `
})

export class GameDetailComponent {
  @Input() game: Game;
}