import { HashLink } from 'react-router-hash-link';

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__links-list">
        <li>
          <HashLink className="nav-tab__link" smooth to='/#about-project'>О проекте</HashLink>
        </li>
        <li>
          <HashLink className="nav-tab__link" smooth to='/#techs'>Технологии</HashLink>
        </li>
        <li>
          <HashLink className="nav-tab__link" smooth to='/#about-me'>Студент</HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
