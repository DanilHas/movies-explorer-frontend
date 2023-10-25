const BASE_URL = 'https://api.movie-explorer.nomoredomainsrocks.ru';

const getResponseData = (response) => {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(response);
};

export const likeMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      id: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
    credentials: 'include',
  }).then((response) => getResponseData(response));
};

export const deleteLike = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
  }).then((response) => getResponseData(response));
};

export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => getResponseData(response));
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then((response) => getResponseData(response));
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => getResponseData(response));
};

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => getResponseData(response));
};

export const updateUserInfo = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  }).then((response) => getResponseData(response));
};

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((repsonse) => getResponseData(repsonse));
};
