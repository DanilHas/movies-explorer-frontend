import promoLogo from '../../images/promo-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <img className="promo__logo" src={promoLogo} alt="логотип Пратикума" />
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </section>
  );
}

export default Promo;
