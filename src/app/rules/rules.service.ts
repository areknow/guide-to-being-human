import { Injectable } from '@angular/core';
import ruleData from '../../data/rules.json';
import { Rule } from './rules.interface.js';

@Injectable()
export class RulesService {

  /**
   * returns data for a specific rule
   * @param id - id associated with a specific rule
   */
  getRule(id: number): Rule {
    return ruleData.rules.find(rule => {
      return rule.id === id;
    });
  }
}
