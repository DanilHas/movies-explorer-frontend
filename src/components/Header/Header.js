import { Link } from 'react-router-dom';
import headerLogo from '../../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={headerLogo} alt="Логотип проекта" />
      </Link>
      <nav className="header__navigation">
        <ul className="header__links-list">
          <li>
            <Link to="/signup" className="header__link">
              Регистрация
            </Link>
          </li>
          <li>
            <Link
              to="/signin"
              className="header__link header__link_type_button"
            >
              Войти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
