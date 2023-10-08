import { Link } from 'react-router-dom';
import headerLogo from '../../images/header-logo.svg';

function RegisterHeader({ title }) {
  return (
    <header className="register-header">
      <div className="register-header__container">
        <Link to="/">
          <img
            className="register-header__logo"
            src={headerLogo}
            alt="Логотип проекта"
          />
        </Link>
        <h1 className="register-header__title">{title}</h1>
      </div>
    </header>
  );
}

export default RegisterHeader;
