import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PlayerViewModule } from './player-view/player-view.module';
import { PlayerViewComponent } from './player-view/player-view.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'players',
    loadChildren: () =>
      import('./player-list-overview/player-list-overview.module').then(m => m.PlayerlistOverviewModule)
  },
  // { path: 'players/:id', component: PlayerViewComponent }, // :id is the player ID
  // { path: '', redirectTo: '/players', pathMatch: 'full' },
  {
    path: 'teams',
    loadChildren: () =>
    import ('./team-list-overview/team-list-overview.module').then(m=>m.TeamListOverviewModule)
  },
  {
    path: 'matches',
    loadChildren: () =>
      import ('./matches-overview/matches-overview.module').then(m => m.MatchesOverviewModule)
  },
  {
    path: 'players/:id',
    loadChildren: () =>
     import('./player-view/player-view.module').then(m => m.PlayerViewModule)
  },
  {
    path: 'teams/team',
    loadChildren: () =>
     import('./team-view/team-view.module').then(m => m.TeamViewModule)
  },
  {
    path: 'matches/match',
    loadChildren: () =>
     import('./match-view/match-view.module').then(m => m.MatchViewModule)
  },
  
  {path: '', redirectTo: '/Home-Component', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


