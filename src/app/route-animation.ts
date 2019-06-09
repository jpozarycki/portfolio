import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
    transition('Main => *', [
      query(':enter, :leave',
        style({position: 'fixed', width: '100%'}),
        {optional: true}),
      group([
        query(':enter', [
          style({ transform: 'translateY(100%)' }),
          animate('1.5s ease-in-out',
            style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform:   'translateY(0%)'}),
          animate('1s ease-in-out',
            style({ transform: 'translateY(-100%)' }))
        ], { optional: true }),
      ])
    ])
  ]);
