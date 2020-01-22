import Controller from '@ember/controller';
import {
  A
} from '@ember/array';
import EmberObject from '@ember/object';

export default Controller.extend({
  supportedRoutes: A([
    EmberObject.create({
      route: 'popular',
      displayName: 'Popular'
    }),
    EmberObject.create({
      route: 'trend',
      displayName: 'Trend'
    }),
    EmberObject.create({
      route: 'newest',
      displayName: 'Newest'
    }),
    EmberObject.create({
      route: 'top',
      displayName: 'Top Rated'
    })
  ])
});
