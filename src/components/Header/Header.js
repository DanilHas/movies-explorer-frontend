import { Link } from 'react-router-dom';
import headerLogo from '../../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип проекта" />
      <div className='header__container'>
        <Link className="header__link">Регистрация</Link>
        <button className="header__button">Войти</button>
      </div>
    </header>
  );
}

export default Header;
