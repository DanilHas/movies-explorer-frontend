import { useLocation } from 'react-router-dom';

function MoviesCard({
  movie,
  handleChangeLikeMovieStatus,
  deleteMovie,
  isLiked,
}) {
  const movieImage = `https://api.nomoreparties.co/${movie.image.url}`;
  const timeConvert = (num) => {
    const hours = num / 60;
    const rhours = Math.floor(hours);
    const minutes = Math.round((hours - rhours) * 60);

    return rhours === 0
      ? `${minutes}м`
      : minutes === 0
      ? `${rhours}ч`
      : `${rhours}ч ${minutes}м`;
  };
  const location = useLocation();

  const handleLikeClick = (e) => {
    e.preventDefault();
    handleChangeLikeMovieStatus(movie, isLiked);
  };

  const handleDeleteButtonClick = (e) => {
    e.preventDefault();
    isLiked = false;
    deleteMovie(movie._id);
  };

  const movieLikeButtonClassName = `movie__like-button ${
    isLiked ? 'movie__like-button_active' : ''
  }`;

  return (
    <>
      <img
        className="movie__image"
        src={location.pathname === '/movies' ? movieImage : movie.image}
        alt={movie.image.name}
      />
      <div className="movie__description-container">
        <h2 className="movie__title">{movie.nameRU}</h2>
        {location.pathname === '/movies' ? (
          <span
            className={movieLikeButtonClassName}
            onClick={handleLikeClick}
          />
        ) : (
          <span
            className="movie__like-button movie__like-button_type_delete"
            onClick={handleDeleteButtonClick}
          />
        )}
      </div>
      <p className="movie__duration">{timeConvert(movie.duration)}</p>
    </>
  );
}

export default MoviesCard;
