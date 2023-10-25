const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const getResponseData = (response) => {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(`Error: ${response.status}`);
};

export const getMovies = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => getResponseData(response));
};
