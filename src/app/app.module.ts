import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerListModule } from './player-list/player-list.module';
import { TeamListModule } from './team-list/team-list.module';
import { MatchesModule } from './matches/matches.module';
import { HomeModule } from './home/home.module';
import { PlayerListOverviewComponent } from './player-list-overview/player-list-overview.component';
import { PlayerlistOverviewModule } from './player-list-overview/player-list-overview.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PlayerlistOverviewModule,
    TeamListModule,
    MatchesModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
