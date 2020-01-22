import Controller from '@ember/controller';
import {
  A
} from '@ember/array';
import EmberObject from '@ember/object';
import { debounce } from '@ember/runloop';
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
      debounce(this, async function () {
        let searchInput = this.get('searchInput');
        if (searchInput && searchInput.length > 2) {
          let results = await this.get('api').fetch('https://api.themoviedb.org/3/search/movie', {
            query: searchInput
          });
        }
      }, 300);
    }
  }
});
