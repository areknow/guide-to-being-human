import { Injectable } from '@angular/core';
import ruleData from '../../data/rules.json';
import { Rule } from './rules.interface.js';

@Injectable()
export class RulesService {

  /**
   * constructor
   */
  constructor() { }

  /**
   * get rule data
   * @param id - id associated with a specific rule
   */
  getRule(id: number): Rule {
    return ruleData.rules.find(m => {
      return m.id === id;
    });
  }
}
