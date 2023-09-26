import SectionHeader from '../SectionHeader/SectionHeader';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <SectionHeader title="О проекте" />
      <div className="about-project__text-container">
        <h2 className="about-project__title about-project__title_type_stages">
          Дипломный проект включал 5 этапов
        </h2>
        <h2 className="about-project__title about-project__title_type_time">
          На выполнение диплома ушло 5 недель
        </h2>
        <p className="about-project__subtitle about-project__subtitle_type_stages">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="about-project__subtitle about-project__subtitle_type_time">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__timeline-container">
        <figure className="about-project__timeline about-project__timeline_type_backend">
          <p className="about-project__timeline-text about-project__timeline-text_type_backend">
            1 неделя
          </p>
          <figcaption className="about-project__timeline-caption">
            Back-end
          </figcaption>
        </figure>
        <figure className="about-project__timeline about-project__timeline_type_frontend">
          <p className="about-project__timeline-text about-project__timeline-text_type_frontend">
            4 недели
          </p>
          <figcaption className="about-project__timeline-caption">
            Front-end
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default AboutProject;
