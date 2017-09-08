import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { GamesComponent } from './games.component';
import { DashboardComponent } from './dashboard.component';
import { GameDetailComponent } from './game-detail.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    DashboardComponent,
    GameDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ GameService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
