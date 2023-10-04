import findButtonImage from '../../images/find-button.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import imageLine from '../../images/decoration-image-line.svg';

function SearchForm() {
  return (
    <section className="search-form" aria-label="Форма поиска фильмов">
      <form>
        <fieldset className="search-form__search-film">
          <div className="search-form__search-container">
            <input
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              name="film"
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
          <div className="search-form__checkbox-container">
            <FilterCheckbox />
            <p className="search-form__checkbox-text">Короткометражки</p>
          </div>
        </fieldset>
      </form>
      <img
        className="search-form__image-line"
        src={imageLine}
        alt="Стилистическая линия"
      />
    </section>
  );
}

export default SearchForm;
