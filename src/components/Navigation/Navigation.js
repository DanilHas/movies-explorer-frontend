import { Link, useLocation } from 'react-router-dom';
import accountIcon from '../../images/account-icon.svg';

function Navigation({ isBurgerMenuOpen, setBurgerMenuOpen }) {
  const handleBurgerMenuClose = () => {
    setBurgerMenuOpen(false);
  };

  const location = useLocation();

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
              to="/"
              className={`navigation__link ${
                isBurgerMenuOpen ? 'navigation__link_type_burger' : ''
              } ${location.pathname === '/' ? 'navigation__link_active' : ''}`}
              onClick={handleBurgerMenuClose}
            >
              Главная
            </Link>
          </li>
        )}
        <li>
          <Link
            to="/movies"
            className={`navigation__link ${
              isBurgerMenuOpen ? 'navigation__link_type_burger' : ''
            } ${
              location.pathname === '/movies' ? 'navigation__link_active' : ''
            }`}
            onClick={handleBurgerMenuClose}
          >
            Фильмы
          </Link>
        </li>
        <li>
          <Link
            to="/saved-movies"
            className={`navigation__link ${
              isBurgerMenuOpen ? 'navigation__link_type_burger' : ''
            } ${
              location.pathname === '/saved-movies'
                ? 'navigation__link_active'
                : ''
            }`}
            onClick={handleBurgerMenuClose}
          >
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      <Link
        to="/profile"
        className="navigation__acc-link"
        onClick={handleBurgerMenuClose}
      >
        Аккаунт
        <div
          className={`navigation__icon-wrapper ${
            isBurgerMenuOpen || location.pathname !== '/'
              ? 'navigation__icon-wrapper_active'
              : ''
          }`}
        >
          <img src={accountIcon} alt="Иконка аккаунта пользователя" />
        </div>
      </Link>
    </nav>
  );
}

export default Navigation;
