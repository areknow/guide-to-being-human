import { animate, keyframes, query, style, transition, trigger } from '@angular/animations';

export const RulesAnimations = [
  trigger('revealHeader', [
    transition(':enter', [
      style({
        opacity: 0,
      }),
      animate('2000ms', style({
        opacity: 1,
      })),
    ])
  ]),

  trigger('revealNav', [
    transition(':enter', [
      style({
        opacity: 0,
      }),
      animate('2000ms 1000ms', style({
        opacity: 1,
      })),
    ])
  ]),

  trigger('revealPaginator', [
    transition(':enter', [
      style({
        opacity: 0,
      }),
      animate('2000ms 1000ms', style({
        opacity: 1,
      })),
    ])
  ]),

  trigger('revealContent', [
    transition(':enter', [
      query('h2', animate(0, keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ transform: 'translate(0, 30px)', offset: 0 }),
      ]))),
      query('h1', animate(0, keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ transform: 'translate(0, 30px)', offset: 0 }),
      ]))),
      query('p', animate(0, keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ transform: 'translate(0, 30px)', offset: 0 }),
      ]))),

      query('h2', animate('500ms 3000ms', keyframes([
        style({ opacity: 1, offset: 1 }),
        style({ transform: 'translate(0, 0)', offset: 1 }),
      ]))),
      query('h1', animate('500ms 500ms', keyframes([
        style({ opacity: 1, offset: 1 }),
        style({ transform: 'translate(0, 0)', offset: 1 }),
      ]))),
      query('p', animate('500ms 1000ms', keyframes([
        style({ opacity: 1, offset: 1 }),
        style({ transform: 'translate(0, 0)', offset: 1 }),
      ]))),
    ])
  ])
];
