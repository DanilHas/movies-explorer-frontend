import { useCallback, useEffect, useState } from 'react';
import AuthHeader from '../AuthHeader/AuthHeader';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';

function Movies({
  isDataLoading,
  setDataLoading,
  setSavedMovies,
  isLoadingError,
  setLoadingError,
  handleChangeLikeMovieStatus,
  checked,
  setChecked,
  savedMovies,
}) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isFirstEntrance, setFirstEntrance] = useState(true);
  const allMovies = JSON.parse(localStorage.getItem('allMovies'));
  const searchData = JSON.parse(localStorage.getItem('searchData'));

  const filterMovies = useCallback((moviesArr, isChecked, inputText) => {
    setInputValue(inputText);
    setFirstEntrance(false);

    const filteredMovies = moviesArr.filter((movie) => {
      const searchPhrase =
        movie.nameRU.toLowerCase().includes(inputText.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(inputText.toLowerCase());
      return isChecked ? searchPhrase && movie.duration <= 40 : searchPhrase;
    });

    setFilteredMovies(filteredMovies);

    localStorage.setItem(
      'searchData',
      JSON.stringify({
        movies: filteredMovies,
        checked: isChecked,
        inputValue: inputText,
      })
    );
  }, []);

  useEffect(() => {
    if (searchData) {
      const { movies, checked, inputValue } = searchData;

      setInputValue(inputValue);
      setChecked(checked);
      setFilteredMovies(movies);
      filterMovies(movies, checked, inputValue);
    }
  }, [filterMovies]);

  useEffect(() => {
    mainApi
      .getMovies()
      .then((res) => setSavedMovies(res.reverse()))
      .catch((err) => console.error(`Error: ${err.status} ${err.statusText}`));
  }, []);

  const getMovies = () => {
    if (!allMovies) {
      setDataLoading(true);
      moviesApi
        .getMovies()
        .then((res) => {
          res.map((movie) => {
            movie.isLiked = false;
            return movie;
          });
          localStorage.setItem('allMovies', JSON.stringify(res));
          filterMovies(res, checked, inputValue);
          setLoadingError(false);
        })
        .catch((err) => {
          setLoadingError(true);
          console.error(`${err} ${err.message}`);
        })
        .finally(() => setDataLoading(false));
    } else {
      filterMovies(allMovies, checked, inputValue);
    }
  };

  return (
    <>
      <AuthHeader />
      <main className="content">
        <SearchForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          getMovies={getMovies}
          filterMovies={filterMovies}
          allMovies={allMovies}
          checked={checked}
          setChecked={setChecked}
          isFirstEntrance={isFirstEntrance}
        />
        <MoviesCardList
          movies={filteredMovies}
          isDataLoading={isDataLoading}
          isLoadingError={isLoadingError}
          isFirstEntrance={isFirstEntrance}
          handleChangeLikeMovieStatus={handleChangeLikeMovieStatus}
          savedMovies={savedMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
