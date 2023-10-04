import { Link, useLocation } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import useCheckValidation from '../../hooks/useCheckValidation';

function AuthForm({
  handleChange,
  formValues,
  buttonText,
  buttonAriaLabel,
  authText,
  linkText,
  linkTo,
}) {
  const [validation, handleValidation] = useCheckValidation();
  const { isInputValid, isValid, errorMessage } = validation;

  const { name, email, password } = formValues;

  const location = useLocation();

  return (
    <main>
      <section className="auth">
        <form className="form auth-form" onChange={handleValidation} noValidate>
          <fieldset className="auth-form__user-data">
            {location.pathname === '/signup' && (
              <div className="auth-form__container">
                <label className="auth-form__label" htmlFor="name">
                  Имя
                </label>
                <input
                  className={`auth-form__input ${
                    !isInputValid.name ? 'auth-form__input_type_error' : ''
                  }`}
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={handleChange}
                />
                <ErrorMessage
                  isValid={isInputValid.name}
                  errorMessage={errorMessage.name}
                />
              </div>
            )}
            <div className="auth-form__container">
              <label className="auth-form__label" htmlFor="email">
                E-mail
              </label>
              <input
                className={`auth-form__input ${
                  !isInputValid.email ? 'auth-form__input_type_error' : ''
                }`}
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={handleChange}
              />
              <ErrorMessage
                isValid={isInputValid.email}
                errorMessage={errorMessage.email}
              />
            </div>
            <div className="auth-form__container">
              <label className="auth-form__label" htmlFor="password">
                Пароль
              </label>
              <input
                className={`auth-form__input ${
                  !isInputValid.password ? 'auth-form__input_type_error' : ''
                }`}
                type="password"
                name="password"
                id="password"
                required
                minLength={6}
                value={password}
                onChange={handleChange}
              />
              <ErrorMessage
                isValid={isInputValid.password}
                errorMessage={errorMessage.password}
              />
            </div>
          </fieldset>
          <button
            className={`auth-form__button ${
              !isValid ? 'auth-form__button_disabled' : ''
            }`}
            type="submit"
            aria-label={buttonAriaLabel}
          >
            {buttonText}
          </button>
        </form>
        <p className="auth__text">
          {authText}
          <Link className="auth__link" to={linkTo}>
            {linkText}
          </Link>
        </p>
      </section>
    </main>
  );
}

export default AuthForm;
