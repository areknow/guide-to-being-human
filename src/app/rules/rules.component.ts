import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RulesService } from './rules.service';
import { Rule } from './rules.interface';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  ruleId: string;
  rule: Rule;

  /**
   * constructor
   * @param route - active route
   */
  constructor(
    private route: ActivatedRoute,
    private rulesService: RulesService
  ) { }

  /**
   * initialize component
   */
  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.ruleId = res.id;
      this.loadRuleData(this.ruleId);
    });
  }

  /**
   * get rule data
   * @param id - id associated with a specific rule
   */
  loadRuleData(id: string): void {
    this.rule = this.rulesService.getRule(Number(id));
  }

}
