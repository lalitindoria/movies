import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    let top = await this.get('api').fetch('https://api.themoviedb.org/3/movie/top_rated');
    return top.results.slice(0, 20);
  }
});
