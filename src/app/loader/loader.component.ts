import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('showTitle', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translate(0, -30px)'
        }),
        animate('1000ms 10ms', style({
          opacity: 1,
          transform: 'translate(0, 0)'
        })),
      ]),
    ]),
    trigger('showLoader', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translate(0, 30px)'
        }),
        query('span', animate(0, style({ width: '0%' }))),
        animate('1000ms', style({
          opacity: 1,
          transform: 'translate(0, 0)'
        })),
        query('span', animate('2000ms', style({ width: '100%' }))),
      ])
    ])

  ]
})
export class LoaderComponent {

  constructor(private router: Router) { }

  trigger() {
    this.router.navigate(['rule', '1']);
  }

}
