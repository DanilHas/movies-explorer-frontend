import { useLocation } from 'react-router-dom';

function ErrorMessage({ isValid, errorMessage }) {
  const location = useLocation();

  return (
    <span
      className={`form__error ${
        location.pathname === '/profile' ? 'form__error_location_profile' : ''
      } ${!isValid ? 'form__error_visible' : ''}`}
    >
      {errorMessage}
    </span>
  );
}

export default ErrorMessage;
