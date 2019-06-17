import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'rule/:id',
    loadChildren: () => import('./rules/rules.module').then(m => m.RulesModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'rule/1',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
