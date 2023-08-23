import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { PlayerlistOverviewModule } from './player-list-overview/player-list-overview.module';
import { MatchesOverviewModule } from './matches-overview/matches-overview.module';
import { TeamListOverviewModule } from './team-list-overview/team-list-overview.module';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PlayerlistOverviewModule,
    TeamListOverviewModule,
    MatchesOverviewModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
