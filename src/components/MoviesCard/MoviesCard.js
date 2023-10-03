import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie }) {
  const movieLInk = movie.poster[Object.keys(movie.poster)];

  const [isLiked, setLike] = useState(false);

  const handleLikeClick = () => {
    setLike(!isLiked);
  };

  const movieLikeButtonClassName = `movie__like-button ${
    isLiked ? 'movie__like-button_active' : ''
  }`;

  const location = useLocation();

  return (
    <>
      <img className="movie__image" src={movieLInk} alt={movie.title} />
      <div className="movie__description-container">
        <h2 className="movie__title">{movie.title}</h2>
        {location.pathname === '/movies' ? (
          <button
            className={movieLikeButtonClassName}
            type="button"
            aria-label="лайка"
            onClick={handleLikeClick}
          />
        ) : (
          <button
            className="movie__like-button movie__like-button_type_delete"
            type="button"
            aria-label="удаления сохраненного фильма"
          />
        )}
      </div>
      <p className="movie__duration">{movie.duration}</p>
    </>
  );
}

export default MoviesCard;
