import SectionHeader from '../SectionHeader/SectionHeader';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <SectionHeader title="О проекте" />
      <div className="about-project__text-container">
        <h3 className="about-project__title about-project__title_type_stages">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="about-project__title about-project__title_type_time">
          На выполнение диплома ушло 5 недель
        </h3>
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
        <div className="about-project__timeline about-project__timeline_type_backend">
          <p className="about-project__timeline-text about-project__timeline-text_type_backend">
            1 неделя
          </p>
        </div>
        <p className="about-project__timeline-caption about-project__timeline-caption_type_backend">
          Back-end
        </p>
        <div className="about-project__timeline about-project__timeline_type_frontend">
          <p className="about-project__timeline-text about-project__timeline-text_type_frontend">
            4 недели
          </p>
        </div>
        <p className="about-project__timeline-caption about-project__timeline-caption_type_frontend">
          Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
