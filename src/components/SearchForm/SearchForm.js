import findButtonImage from '../../images/find-button.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useLocation } from 'react-router-dom';

function SearchForm({
  inputValue,
  setInputValue,
  getMovies,
  filterMovies,
  allMovies,
  checked,
  setChecked,
  isFirstEntrance,
}) {
  const [isValid, setValid] = useState(true);
  const location = useLocation();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputValue) {
      setValid(true);
      getMovies();
    } else {
      setValid(false);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckBoxChange = () => {
    if (inputValue) {
      setChecked(!checked);
      setValid(true);
      location.pathname === '/movies'
        ? filterMovies(allMovies, !checked, inputValue)
        : filterMovies(!checked);
    } else {
      setValid(false);
    }
  };

  return (
    <section className="search-form" aria-label="Форма поиска фильмов">
      <form
        className="search-form__form"
        noValidate
        onSubmit={handleFormSubmit}
      >
        <fieldset className="search-form__search-film">
          <div className="search-form__search-container">
            <input
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              name="film"
              required
              onChange={handleChange}
              value={inputValue}
            />
            <button
              className="search-form__button"
              type="submit"
              aria-label="поиска фильмов"
            >
              <img
                className="search-form__button-image"
                src={findButtonImage}
                alt="Изображение кнопки поиска фильмов"
              />
            </button>
          </div>
          {!isValid && (
            <ErrorMessage
              isValid={isValid}
              errorMessage="Нужно ввести ключевое слово"
            />
          )}
          <div className="search-form__checkbox-container">
            <FilterCheckbox
              checked={checked}
              handleCheckBoxChange={handleCheckBoxChange}
              isFirstEntrance={isFirstEntrance}
            />
            <p className="search-form__checkbox-text">Короткометражки</p>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;
