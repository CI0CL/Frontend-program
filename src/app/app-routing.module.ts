import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'players',
    loadChildren: () =>
      import('./player-list-overview/player-list-overview.module').then(m => m.PlayerlistOverviewModule)
  },
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
  {path: '', redirectTo: '/Home-Component', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
