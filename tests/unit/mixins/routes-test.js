import EmberObject from '@ember/object';
import RoutesMixin from 'movies/mixins/routes';
import { module, test } from 'qunit';

module('Unit | Mixin | routes');

// Replace this with your real tests.
test('it works', function(assert) {
  let RoutesObject = EmberObject.extend(RoutesMixin);
  let subject = RoutesObject.create();
  assert.ok(subject);
});
