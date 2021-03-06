import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    let popular = await this.get('api').fetch('https://api.themoviedb.org/3/movie/popular');
    return popular.results.slice(0, 20);
  }
});
