import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    query: {}
  },
  async model(params) {
    let res = await this.get('api').fetch('https://api.themoviedb.org/3/search/movie', {
      query: params.query
    });
    return res.results;
  }
});
