import SectionHeader from '../SectionHeader/SectionHeader';
import TechsCard from '../TechsCard/TechsCard';

function Techs() {
  return (
    <section className="techs" id="techs">
      <SectionHeader title="Технологии" />
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__cards-list">
        <TechsCard cardText="HTML" />
        <TechsCard cardText="CSS" />
        <TechsCard cardText="JS" />
        <TechsCard cardText="React" />
        <TechsCard cardText="Git" />
        <TechsCard cardText="Express.js" />
        <TechsCard cardText="mongoDB" />
      </ul>
    </section>
  );
}

export default Techs;
