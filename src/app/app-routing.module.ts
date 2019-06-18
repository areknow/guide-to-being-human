import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  {
    path: 'rule/:id',
    loadChildren: () => import('./rules/rules.module').then(m => m.RulesModule),
  },
  {
    path: '',
    component: LoaderComponent,
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
