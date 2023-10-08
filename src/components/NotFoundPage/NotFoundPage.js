import { Link, useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <main className="not-found content">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link className="not-found__link" onClick={goBack}>
        Назад
      </Link>
    </main>
  );
}

export default NotFoundPage;
