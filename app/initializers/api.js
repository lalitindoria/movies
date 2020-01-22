export function initialize(application) {
  application.inject('route', 'api', 'service:api');
}

export default {
  initialize
};
