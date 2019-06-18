import { animate, keyframes, query, style, transition, trigger } from '@angular/animations';

export const LoaderAnimations = [
  // animation sequence for title element
  trigger('title', [
    transition(':enter', [
      // Set the initial state of the progress bar (hide it and move it up)
      style({
        opacity: 0,
        transform: 'translate(0, -30px)'
      }),
      // Animate it into view and move it down
      animate('1000ms 1000ms', style({
        opacity: 1,
        transform: 'translate(0, 0)'
      })),
      // Animate the element out of view and back up
      animate('200ms 3000ms', style({
        opacity: 0,
        transform: 'translate(0, -30px)'
      })),
      // Add a delay before the page route
      animate('500ms', style({
        opacity: 0,
      })),
    ]),
  ]),

  // animation sequence for progress bar
  trigger('loader', [
    transition(':enter', [
      // Set the initial state of the progress bar (hide it and move it down)
      style({
        opacity: 0,
        transform: 'translate(0, 30px)'
      }),
      // Animate it into view and move it up
      animate('1000ms 1000ms', style({
        opacity: 1,
        transform: 'translate(0, 0)'
      })),
      // Start the progress bar animation (from 0% - 100%)
      query('span', animate('500ms 400ms', keyframes([
        style({ width: '0%', offset: 0 }),
        style({ width: '100%', offset: 1 }),
      ]))),
      // Animate the element out of view and back down
      animate('200ms 3000ms', style({
        opacity: 0,
        transform: 'translate(0, 30px)'
      })),
      // Add a delay before the page route
      animate('500ms', style({
        opacity: 0,
      })),
    ])
  ]),
];
