import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    let newest = await this.get('api').fetch('https://api.themoviedb.org/3/movie/upcoming');
    return newest.results.slice(0, 20);
  }
});
