import { Link } from 'react-router-dom';
import headerLogo from '../../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={headerLogo} alt="Логотип проекта" />
      </Link>
      <div className="header__container">
        <Link className="header__link">Регистрация</Link>
        <Link className="header__link header__link_type_button">
          <button className="header__button">Войти</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
