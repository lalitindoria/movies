import Controller from '@ember/controller';
import {
  A
} from '@ember/array';
import EmberObject from '@ember/object';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({
  api: service(),
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
  ]),
  actions: {
    async search() {
      let searchInput = this.get('searchInput');
      if (searchInput && searchInput.length > 2) {
        this.transitionToRoute(`/search?query=${searchInput}`);
      }
    }
  }
});
