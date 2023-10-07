import AuthHeader from '../AuthHeader/AuthHeader';
import { useState } from 'react';
import useCheckValidation from '../../hooks/useCheckValidation';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function Profile({ setLoggedIn }) {
  const [isProfileEdit, setProfileEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleProfileEdit = (event) => {
    event.preventDefault();
    setProfileEdit(true);
  };

  const [validation, handleValidation] = useCheckValidation();

  const { isInputValid, isValid } = validation;

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <AuthHeader />
      <main className="content">
        <section className="profile">
          <h1 className="profile__title">Привет, Данил!</h1>
          <form
            className="form profile__form"
            onChange={handleValidation}
            noValidate
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
                <input
                  className="profile__input"
                  type="text"
                  name="user-name"
                  id="name"
                  placeholder="Введите имя"
                  required
                  minLength={3}
                  maxLength={40}
                  defaultValue="Данил"
                  disabled={!isProfileEdit}
                />
              </div>
              <div className="profile__wrapper">
                <label className="profile__input-label" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="profile__input"
                  type="email"
                  name="user-email"
                  id="email"
                  placeholder="Введите email"
                  required
                  defaultValue="pochta@yandex.ru"
                  disabled={!isProfileEdit}
                />
              </div>
            </fieldset>
            {isProfileEdit ? (
              <>
                {!isValid && errorMessage && (
                  <ErrorMessage isValid={isValid} errorMessage={errorMessage} />
                )}
                <button
                  className={`profile__button profile__save-button ${
                    !isValid ? 'profile__save-button_disabled' : ''
                  }`}
                  type="submit"
                  aria-label="сохранения данных пользователя"
                  disabled={!isValid}
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
              onClick={logout}
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
