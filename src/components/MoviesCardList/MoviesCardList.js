import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  movies,
  isDataLoading,
  isLoadingError,
  isFirstEntrance,
  handleChangeLikeMovieStatus,
  deleteMovie,
  savedMovies,
  count,
  handleMoreButtonCLick,
}) {
  const location = useLocation();

  const modifiedMoviesArr = movies.slice(0, count);

  const renderMovies = (moviesArr) => {
    return moviesArr.map((movie) => {
      const isLiked = savedMovies.some(
        (savedMovie) => savedMovie.id === movie.id
      );

      return (
        <li className="movie" key={movie.id}>
          <a
            className="movie__trailer-link"
            href={movie.trailerLink}
            target="_blank"
            rel="noreferrer"
          >
            <MoviesCard
              movie={movie}
              handleChangeLikeMovieStatus={handleChangeLikeMovieStatus}
              deleteMovie={deleteMovie}
              isLiked={isLiked}
            />
          </a>
        </li>
      );
    });
  };

  return (
    <section className="movies" aria-label="Фильмы">
      {isDataLoading ? (
        <Preloader />
      ) : isLoadingError ? (
        <p className="movies__text movies__text_type_error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : !isFirstEntrance && movies.length === 0 ? (
        <p className="movies__text">Ничего не найдено</p>
      ) : isFirstEntrance ? (
        <p className="movies__text">Введите поисковый запрос</p>
      ) : (
        <ul
          className={`movies__list ${
            location.pathname === '/saved-movies'
              ? 'movies__list_page_saved-movies'
              : ''
          }`}
        >
          {location.pathname === '/movies'
            ? renderMovies(modifiedMoviesArr)
            : renderMovies(movies)}
        </ul>
      )}
      {location.pathname === '/movies' &&
        movies.length > 0 &&
        modifiedMoviesArr.length !== movies.length && (
          <button
            className="movies__more-button"
            type="button"
            aria-label="загрузки следующих фильмов"
            onClick={handleMoreButtonCLick}
          >
            Ещё
          </button>
        )}
    </section>
  );
}

export default MoviesCardList;
