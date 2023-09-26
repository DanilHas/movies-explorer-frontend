import imageLine from '../../images/portfolio-image-line.svg';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <img
        className="footer__image-line"
        alt="Стилистическая линия"
        src={imageLine}
      />
      <div className="footer__wrapper">
        <p className="footer__copyright">© 2023</p>
        <ul className="footer__links-list">
          <li>
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://github.com/DanilHas"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
