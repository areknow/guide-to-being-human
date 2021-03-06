import { animate, state, style, transition, trigger } from '@angular/animations';

export const RulesAnimations = [
  trigger('paginate', [

    // Set start and end states
    state('enter', style({
      opacity: '1',
      transform: 'translate(0, 0)'
    })),
    state('exit', style({
      opacity: '0',
      transform: 'translate(-20px, 0)'
    })),

    // Define transitions
    transition('* => exit', [
      animate('200ms', style({
        opacity: 0,
        transform: 'translate(-20px, 0)'
      })),
    ]),
    transition('* => enter', [
      animate('200ms', style({
        opacity: 1,
        transform: 'translate(0, 0)'
      })),
    ]),
  ])
];
