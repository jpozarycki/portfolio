import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const mainToOthers = trigger('routeAnimations', [
  transition('Main => *', [
    query(':enter, :leave',
      style({position: 'absolute', width: '100%'}),
      {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('1s ease-in-out',
          style({transform: 'translateX(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('1s ease-in-out',
          style({transform: 'translateX(-100%)'}))
      ], {optional: true}),
    ])
  ])
]);

