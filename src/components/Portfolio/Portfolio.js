import imageLine from '../../images/decoration-image-line.svg';

function Portfolio() {
  return (
    <>
      <h3 className="about-me__portfolio-title">Портфолио</h3>
      <ul className="about-me__links-list">
        <li className="about-me__portfolio-wrapper">
          <a
            className="about-me__portfolio-link about-me__portfolio-link_type_text"
            href="https://danilhas.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <a
            className="about-me__portfolio-link about-me__portfolio-link_type_arrow"
            href="https://danilhas.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            ↗
          </a>
        </li>
        <img
          className="about-me__image-line"
          alt="Стилистическая линия"
          src={imageLine}
        />
        <li className="about-me__portfolio-wrapper">
          <a
            className="about-me__portfolio-link about-me__portfolio-link_type_text"
            href="https://danilhas.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <a
            className="about-me__portfolio-link about-me__portfolio-link_type_arrow"
            href="https://danilhas.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            ↗
          </a>
        </li>
        <img
          className="about-me__image-line"
          alt="Стилистическая линия"
          src={imageLine}
        />
        <li className="about-me__portfolio-wrapper">
          <a
            className="about-me__portfolio-link about-me__portfolio-link_type_text"
            href="https://danilhas.github.io/mesto-react/"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <a
            className="about-me__portfolio-link about-me__portfolio-link_type_arrow"
            href="https://danilhas.github.io/mesto-react/"
            target="_blank"
            rel="noreferrer"
          >
            ↗
          </a>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
