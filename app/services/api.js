import Service from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Service.extend({
  apiKey: '3a94078fb34b772a31d9a1348035bed7',
  async fetch(url, params) {
    params = isEmpty(params) ? '' : '&' + Object.keys(params).map(key => key + '=' + params[key]).join('&');
    const response = await fetch(`${url}?api_key=${this.get('apiKey')}${params}`);
    return await response.json();
  },
  post() {

  },
  put() {

  },
  delete() {

  }
});
