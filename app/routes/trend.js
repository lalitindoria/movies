import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    let trend = await this.get('api').fetch('https://api.themoviedb.org/3/trending/all/day');
    return trend.results.slice(0, 20);
  }
});
