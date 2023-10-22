import { Link, useLocation } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import useCheckValidation from '../../hooks/useCheckValidation';
import { EMAIL_REG_EX, NAME_REG_EX } from '../../utils/constants';

function AuthForm({
  handleChange,
  formValues,
  buttonText,
  buttonAriaLabel,
  authText,
  linkText,
  linkTo,
  register,
  loadingErrorMessage,
  isLoadingError,
  login,
  isDataLoading,
}) {
  const [validation, handleValidation] = useCheckValidation();
  const { isValid, isInputValid, errorMessage } = validation;

  const { name, email, password } = formValues;

  const disabledButton = !isValid || isDataLoading;

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    location.pathname === '/signup'
      ? register(name, email, password)
      : login(email, password);
  };

  return (
    <main className="content">
      <section
        className="auth"
        aria-label="Регистрация/авторизация пользователя"
      >
        <form
          className="form auth-form"
          onChange={handleValidation}
          onSubmit={handleSubmit}
          noValidate
        >
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
                  placeholder="Введите имя"
                  required
                  minLength={3}
                  maxLength={40}
                  value={name}
                  onChange={handleChange}
                  pattern={NAME_REG_EX}
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
                placeholder="Введите email"
                required
                value={email}
                onChange={handleChange}
                pattern={EMAIL_REG_EX}
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
                placeholder="Введите пароль"
                required
                minLength={6}
                maxLength={25}
                value={password}
                onChange={handleChange}
              />
              <ErrorMessage
                isValid={isInputValid.password}
                errorMessage={errorMessage.password}
              />
            </div>
          </fieldset>
          <ErrorMessage
            isValid={!isLoadingError}
            errorMessage={loadingErrorMessage}
            isLoadingError={isLoadingError}
          />
          <button
            className={`auth-form__button ${
              disabledButton ? 'auth-form__button_disabled' : ''
            }`}
            type="submit"
            aria-label={buttonAriaLabel}
            disabled={disabledButton}
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
