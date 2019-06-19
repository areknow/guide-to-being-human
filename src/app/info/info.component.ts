import { Component, OnInit } from '@angular/core';
import { FadeInAnimation } from '../shared/animations/fade-in';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: FadeInAnimation
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
