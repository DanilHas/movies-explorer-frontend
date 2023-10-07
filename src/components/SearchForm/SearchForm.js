import useCheckValidation from '../../hooks/useCheckValidation';
import findButtonImage from '../../images/find-button.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  const [validation, handleValidation] = useCheckValidation();

  const { isInputValid, isValid } = validation;

  return (
    <section className="search-form" aria-label="Форма поиска фильмов">
      <form
        className="search-form__form"
        noValidate
        onChange={handleValidation}
      >
        <fieldset className="search-form__search-film">
          <div className="search-form__search-container">
            <input
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              name="film"
              required
            />
            <button
              className={`search-form__button ${
                !isValid ? 'search-form__button_disabled' : ''
              }`}
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
          <div className="search-form__checkbox-container">
            <FilterCheckbox />
            <p className="search-form__checkbox-text">Короткометражки</p>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;
