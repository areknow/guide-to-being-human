import { Component, OnInit } from '@angular/core';
import rulesData from './../../../data/rules.json';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  data = rulesData;

  /**
   * constructor
   */
  constructor() { }

}
