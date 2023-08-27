import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { PlayerlistOverviewModule } from './player-list-overview/player-list-overview.module';
import { MatchesOverviewModule } from './matches-overview/matches-overview.module';
import { TeamListOverviewModule } from './team-list-overview/team-list-overview.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PlayerViewComponent } from './player-view/player-view.component';
import { PlayerViewModule } from './player-view/player-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PlayerlistOverviewModule,
    TeamListOverviewModule,
    MatchesOverviewModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    PlayerViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
