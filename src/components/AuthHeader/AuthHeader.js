import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import headerLogo from '../../images/header-logo.svg';
import useResize from '../../hooks/useResize';

function AuthHeader() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const screenSize = useResize();

  useEffect(() => {
    if (screenSize[0] >= 1023) {
      setBurgerMenuOpen(false);
    }
  }, [screenSize]);

  const handleBurgerButtonClick = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <header className="auth-header">
      <div className="auth-header__container">
        <Link>
          <img
            className="auth-header__logo"
            src={headerLogo}
            alt="Логотип проекта"
          />
        </Link>
        <Navigation isBurgerMenuOpen={isBurgerMenuOpen} />
      </div>
      <button
        className={`auth-header__burger ${
          isBurgerMenuOpen ? 'auth-header__burger_active' : ''
        }`}
        aria-label="Открыть меню"
        aria-expanded="false"
        onClick={handleBurgerButtonClick}
      >
        <span
          className={`auth-header__burger-line ${
            isBurgerMenuOpen ? 'auth-header__burger-line_active' : ''
          }`}
        ></span>
      </button>
    </header>
  );
}

export default AuthHeader;
