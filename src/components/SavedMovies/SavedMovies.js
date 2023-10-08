import AuthHeader from '../AuthHeader/AuthHeader';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
  return (
    <>
      <AuthHeader />
      <main className="content">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
