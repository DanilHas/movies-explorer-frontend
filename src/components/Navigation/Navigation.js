import { Link } from 'react-router-dom';
import accountIcon from '../../images/account-icon.svg';

function Navigation({ isBurgerMenuOpen }) {
  return (
    <nav
      className={`navigation ${isBurgerMenuOpen ? 'navigation__active' : ''}`}
    >
      <ul
        className={`navigation__links-list ${
          isBurgerMenuOpen ? 'navigation__links-list_active' : ''
        }`}
      >
        {isBurgerMenuOpen && (
          <li>
            <Link
              className={`navigation__link ${
                isBurgerMenuOpen ? 'navigation__link_active' : ''
              }`}
            >
              Главная
            </Link>
          </li>
        )}
        <li>
          <Link
            className={`navigation__link ${
              isBurgerMenuOpen ? 'navigation__link_active' : ''
            }`}
          >
            Фильмы
          </Link>
        </li>
        <li>
          <Link
            className={`navigation__link ${
              isBurgerMenuOpen ? 'navigation__link_active' : ''
            }`}
          >
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      <Link
        className={`navigation__acc-link ${
          isBurgerMenuOpen ? 'navigation__acc-link_active' : ''
        }`}
      >
        Аккаунт
        <div
          className={`navigation__icon-wrapper ${
            isBurgerMenuOpen ? 'navigation__icon-wrapper_active' : ''
          }`}
        >
          <img src={accountIcon} alt="Иконка аккаунта пользователя" />
        </div>
      </Link>
    </nav>
  );
}

export default Navigation;
