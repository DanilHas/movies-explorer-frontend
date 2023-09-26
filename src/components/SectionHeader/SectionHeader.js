import imageLine from '../../images/about-project-line.svg';

function SectionHeader({ title }) {
  return (
    <>
      <h2 className="title">
        {title}
      </h2>
      <img
        className="image-line"
        alt="Стилистическая линия, ограничивающая главный заголовок"
        src={imageLine}
      />
    </>
  );
}

export default SectionHeader;
