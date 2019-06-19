import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FadeInAnimation } from '../shared/animations/fade-in';
import { RulesAnimations } from './animation';
import { Rule } from './rules.interface';
import { RulesService } from './rules.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
  animations: [RulesAnimations, FadeInAnimation]
})
export class RulesComponent implements OnInit {

  private animSubject = new Subject<boolean>();

  state = 'enter';

  ruleId: string;
  rule: Rule;

  /**
   * constructor
   * @param route - active route
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
   * load rule data
   * @param id - id associated with a specific rule
   */
  loadRuleData(id: string): void {
    this.rule = this.rulesService.getRule(Number(id));
  }

  /**
   * change route
   * @param route - the next route to change too
   */
  changeRoute(route: number) {
    this.state = 'exit';
    this.animSubject.subscribe((change) => {
      if (change === true) {
        this.router.navigate(['rule', route]);
        this.state = 'enter';
      }
    });
  }

  /**
   * animation done logic
   * @param event - animation state
   */
  animDone(event) {
    if (event.fromState === 'enter') {
      this.animSubject.next(true);
    }
  }

}
