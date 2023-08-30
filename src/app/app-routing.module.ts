import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TeamCreateModule } from './team-create/team-create.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
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
  {path:'player/create',
    loadChildren: () =>
    import('./player-create/player-create.module').then(m => m.PlayerCreateModule)
  },
  {path:'team/create',
    loadChildren: () =>
    import('./team-create/team-create.module').then(m=>m.TeamCreateModule)},

  {path: 'players',
    loadChildren: () =>
    import('./player-list-overview/player-list-overview.module').then(m=> m.PlayerlistOverviewModule)},
  {
    path: 'teams/:id',
    loadChildren: () =>
     import('./team-view/team-view.module').then(m => m.TeamViewModule)
  },
  {
    path: 'teams/by-name/:name',
    loadChildren: () =>
     import('./team-view/team-view.module').then(m => m.TeamViewModule)
  },
  
  {
    path: 'matches/:id',
    loadChildren: () =>
     import('./match-view/match-view.module').then(m => m.MatchViewModule)
  },
  
  {path: '', redirectTo: '/Home-Component', pathMatch: 'full'}
];

@NgModule({
  imports: [
  MatInputModule, // for the in-browser error
  MatFormFieldModule, // for the in-browser error
  RouterModule.forRoot(routes),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }


