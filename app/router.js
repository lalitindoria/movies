import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('popular');
  this.route('trend');
  this.route('newest');
  this.route('top');
});

export default Router;
