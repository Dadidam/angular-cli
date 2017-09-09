import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { GameSearchService } from './game-search.service';
import { Game } from './game';

@Component({
  selector: 'game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css'],
  providers: [GameSearchService]
})

export class GameSearchComponent implements OnInit {
  games: Observable<Game[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private gameSearchService: GameSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.games = this.searchTerms
                        .debounceTime(300) // wait 300ms after each keystroke before considering the term
                        .distinctUntilChanged() // ignore if next search term is same as previous
                        .switchMap(term => term ? this.gameSearchService.search(term) : Observable.of<Game[]>([]))
                        .catch(error => {
                          // TODO: add real error handling
                          console.log(error);
                          return Observable.of<Game[]>([]);
                        });
  }

  gotoDetail(game: Game): void {
    let link = ['/detail', game.id];
    this.router.navigate(link);
  }
}