import {
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
} from '@angular/animations';

const options = { optional: true };

// Routable animations
export const slideInAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'relative',
        }),
      ],
      options
    ),
    query(':enter', [style({ left: '50px' })], options),
    query(':leave', animateChild(), options),
    group([
      query(':leave', [style({ display: 'none' })], options),
      query(
        ':enter',
        [animate('300ms ease-out', style({ left: '0px' }))],
        options
      ),
    ]),
    query(':enter', animateChild(), options),
  ]),
]);
