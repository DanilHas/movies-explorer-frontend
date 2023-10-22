import AuthHeader from '../AuthHeader/AuthHeader';
import { useContext, useEffect, useState } from 'react';
import useCheckValidation from '../../hooks/useCheckValidation';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as mainApi from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import { EMAIL_REG_EX, NAME_REG_EX } from '../../utils/constants';

function Profile({
  setLoggedIn,
  loadingErrorMessage,
  setLoadingErrorMessage,
  setLoadingError,
  isLoadingError,
  updateUserInfo,
  setLoadingSuccess,
  isLoadingSuccess,
  isDataLoading,
  setChecked
}) {
  const [isProfileEdit, setProfileEdit] = useState(false);
  const [formValues, setFormValues] = useState({
    'user-name': '',
    'user-email': '',
  });
  const [validation, handleValidation] = useCheckValidation();

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setFormValues({
      'user-name': currentUser.name,
      'user-email': currentUser.email,
    });
    setLoadingError(false);
    setLoadingErrorMessage('');
    setLoadingSuccess(false);
  }, []);

  const { isValid, isInputValid, errorMessage } = validation;

  const name = formValues['user-name'];
  const email = formValues['user-email'];

  const navigate = useNavigate();

  const disabledButton =
    !isValid ||
    (name === currentUser.name && email === currentUser.email) ||
    isDataLoading;

  const handleProfileEdit = (event) => {
    event.preventDefault();
    setProfileEdit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });

    setLoadingSuccess(false);
    setLoadingError(false);
    setLoadingErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUserInfo(name, email);
  };

  const handleSignOut = () => {
    mainApi
      .logout()
      .then(() => {
        localStorage.clear();
        setLoggedIn(false);
        setChecked(false);
        navigate('/', { replace: true });
      })
      .catch((err) => console.error(`Error: ${err.status} ${err.statusText}`));
  };

  return (
    <>
      <AuthHeader />
      <main className="content">
        <section className="profile">
          <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
          <form
            className="form profile__form"
            onChange={handleValidation}
            noValidate
            onSubmit={handleSubmit}
          >
            <fieldset
              className={`profile__user-data ${
                !isValid && errorMessage ? 'profile__user-data_type_error' : ''
              }`}
            >
              <div className="profile__wrapper">
                <label className="profile__input-label" htmlFor="name">
                  Имя
                </label>
                <div className="profile__input-container">
                  <input
                    className="profile__input"
                    type="text"
                    name="user-name"
                    id="name"
                    placeholder="Введите имя"
                    required
                    minLength={3}
                    maxLength={40}
                    value={name}
                    disabled={!isProfileEdit}
                    onChange={handleChange}
                    pattern={NAME_REG_EX}
                  />
                  <ErrorMessage
                    isValid={isInputValid['user-name']}
                    errorMessage={errorMessage['user-name']}
                  />
                </div>
              </div>
              <div className="profile__wrapper">
                <label className="profile__input-label" htmlFor="email">
                  E-mail
                </label>
                <div className="profile__input-container">
                  <input
                    className="profile__input"
                    type="email"
                    name="user-email"
                    id="email"
                    placeholder="Введите email"
                    required
                    value={email}
                    disabled={!isProfileEdit}
                    onChange={handleChange}
                    pattern={EMAIL_REG_EX}
                  />
                  <ErrorMessage
                    isValid={isInputValid['user-email']}
                    errorMessage={errorMessage['user-email']}
                  />
                </div>
              </div>
            </fieldset>
            {isProfileEdit ? (
              <>
                {isLoadingError ? (
                  <ErrorMessage
                    isValid={!isLoadingError}
                    errorMessage={loadingErrorMessage}
                    isLoadingError={isLoadingError}
                  />
                ) : isLoadingSuccess ? (
                  <span className="profile__success-message">
                    Данные профиля успешно изменены!
                  </span>
                ) : (
                  ''
                )}
                <button
                  className={`profile__button profile__save-button ${
                    disabledButton ? 'profile__save-button_disabled' : ''
                  }`}
                  type="submit"
                  aria-label="сохранения данных пользователя"
                  disabled={disabledButton}
                >
                  Сохранить
                </button>
              </>
            ) : (
              <button
                className="profile__button profile__edit-button"
                type="button"
                aria-label="редактирования профиля"
                onClick={handleProfileEdit}
              >
                Редактировать
              </button>
            )}
          </form>
          {!isProfileEdit && (
            <button
              className="profile__button profile__logout-button"
              type="button"
              aria-label="выхода из аккаунта"
              onClick={handleSignOut}
            >
              Выйти из аккаунта
            </button>
          )}
        </section>
      </main>
    </>
  );
}

export default Profile;
