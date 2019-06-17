import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { RulesService } from './rules.service';

@NgModule({
  declarations: [
    RulesComponent
  ],
  imports: [
    CommonModule,
    RulesRoutingModule
  ],
  providers: [
    RulesService
  ]
})
export class RulesModule { }
