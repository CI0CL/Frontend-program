import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'player-list',
    loadChildren: () =>
      import('./player-list-overview/player-list-overview.module').then(m => m.PlayerlistOverviewModule)
  },
  {
    path: 'matches',
    loadChildren: () =>
      import ('./matches-overview/matches-overview.module').then(m => m.MatchesOverviewModule)
  },
  {
    path: 'team-list',
    loadChildren: () =>
    import ('./player-list-overview/player-list-overview.module').then(m=>m.PlayerlistOverviewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
