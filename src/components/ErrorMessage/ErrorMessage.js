import { useLocation } from 'react-router-dom';

function ErrorMessage({ isValid, errorMessage, isLoadingError }) {
  const location = useLocation();

  return (
    <span
      className={`form__error ${
        location.pathname === '/profile'
          ? 'form__error_location_profile'
          : location.pathname === '/movies' ||
            location.pathname === '/saved-movies'
          ? 'form__error_location_movies'
          : ''
      } ${!isValid ? 'form__error_visible' : ''} ${
        isLoadingError ? 'form__error_type_server-error' : ''
      }`}
    >
      {errorMessage}
    </span>
  );
}

export default ErrorMessage;
