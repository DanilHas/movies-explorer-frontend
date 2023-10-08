import wordsFilm from '../../images/33-words-film.jpg';
import yearFilm from '../../images/100-year-film.jpg';
import banksyFilm from '../../images/banksy-film.jpg';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList() {
  const movies = [
    {
      _id: 1,
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      poster: { wordsFilm },
    },
    {
      _id: 2,
      title: 'Киноальманах «100 лет дизайна»',
      duration: '1ч 3м',
      poster: { yearFilm },
    },
    {
      _id: 3,
      title: 'В погоне за Бенкси',
      duration: '1ч 42м',
      poster: { banksyFilm },
    },
    {
      _id: 4,
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      poster: { wordsFilm },
    },
    {
      _id: 5,
      title: 'Киноальманах «100 лет дизайна»',
      duration: '1ч 3м',
      poster: { yearFilm },
    },
    {
      _id: 6,
      title: 'В погоне за Бенкси',
      duration: '1ч 42м',
      poster: { banksyFilm },
    },
    {
      _id: 7,
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      poster: { wordsFilm },
    },
    {
      _id: 8,
      title: 'Киноальманах «100 лет дизайна»',
      duration: '1ч 3м',
      poster: { yearFilm },
    },
    {
      _id: 9,
      title: 'В погоне за Бенкси',
      duration: '1ч 42м',
      poster: { banksyFilm },
    },
    {
      _id: 10,
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      poster: { wordsFilm },
    },
    {
      _id: 11,
      title: 'Киноальманах «100 лет дизайна»',
      duration: '1ч 3м',
      poster: { yearFilm },
    },
    {
      _id: 12,
      title: 'В погоне за Бенкси',
      duration: '1ч 42м',
      poster: { banksyFilm },
    },
  ];

  const location = useLocation();

  const movieList = movies.map((movie) => {
    return (
      <li className="movie" key={movie._id}>
        <MoviesCard movie={movie} />
      </li>
    );
  });

  return (
    <section className="movies" aria-label="Фильмы">
      <ul
        className={`movies__list ${
          location.pathname === '/saved-movies'
            ? 'movies__list_page_saved-movies'
            : ''
        }`}
      >
        {movieList}
      </ul>
      {location.pathname === '/movies' && (
        <button
          className="movies__more-button"
          type="button"
          aria-label="загрузки следующих фильмов"
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
