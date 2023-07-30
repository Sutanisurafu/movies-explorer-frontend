class Api {
  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  _request(baseUrl, headers) {
    return fetch(baseUrl, headers).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register({ name, email, password }) {
    return this._request(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
  }

  login({ email, password }) {
    return this._request(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  }

  checkToken(token) {
    return this._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  }


}

const authApi = new Api({
  baseUrl: 'http://api.movies-lib.nomoreparties.sbs',
  headers: { 'Content-Type': 'application/json' },
});
// const authApi = new AuthApi("http://localhost:3000");
export default authApi;
