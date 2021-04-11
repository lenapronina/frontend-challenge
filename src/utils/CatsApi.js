import { CATS_API_BASEURL, CATS_API_HEADERS } from './constants';

class CatsApi {
  constructor({baseUrl, headers}){
    this._baseURL = baseUrl;
    this._headers = headers;
  }

  _checkResStatus(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getCats() {
    return fetch(`${this._baseURL}/beatfilm-movies`, {
      headers: this._headers
    })
    .then(res => this._checkResStatus(res));
  }
}


const moviesApi = new CatsApi({
  baseUrl: CATS_API_BASEURL,
  headers: CATS_API_HEADERS
});

export default moviesApi;