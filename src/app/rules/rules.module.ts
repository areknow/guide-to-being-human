import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/components/header/header.module';
import { NavModule } from '../shared/components/nav/nav.module';
import { PaginatorModule } from '../shared/components/paginator/paginator.module';
import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { RulesService } from './rules.service';

@NgModule({
  declarations: [
    RulesComponent
  ],
  imports: [
    CommonModule,
    RulesRoutingModule,
    NavModule,
    HeaderModule,
    PaginatorModule,
  ],
  providers: [
    RulesService
  ]
})
export class RulesModule { }
