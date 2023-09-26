import SectionHeader from '../SectionHeader/SectionHeader';
import myPhoto from '../../images/my-photo.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <SectionHeader title="Студент" />
      <div className="about-me__container">
        <h2 className="about-me__title">Данил</h2>
        <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
        <p className="about-me__info">
          Более 4 лет работал юристом в коммерческих компаниях, больше года из
          которых в статусе адвоката. Начал изучать программирование еще в конце
          2019- начале 2020 годов. Сам читал различные статьи, документации,
          смотрел обучающие видео на ютубе и успел написать несколько
          пет-проектов. В декабре 2022 года стал проходить курс от Яндекс
          Практикума. Из хобби и спорта предпочитаю велосипед и футбол. Также
          читаю книгу Роберта Мартина "Чистый код. Создание, анализ и
          рефакторинг".
        </p>
        <a
          className="about-me__link"
          href="https://github.com/DanilHas"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <img className="about-me__photo" src={myPhoto} alt="Моя фотография" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
