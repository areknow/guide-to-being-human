import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  {
    path: '',
    component: LoaderComponent,
  },
  {
    path: 'rule/:id',
    loadChildren: () => import('./rules/rules.module').then(m => m.RulesModule),
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then(m => m.InfoModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
