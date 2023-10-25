import { useEffect, useState } from 'react';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as mainApi from '../../utils/MainApi';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  const [isDataLoading, setDataLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoadingError, setLoadingError] = useState(false);
  const [loadingErrorMessage, setLoadingErrorMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [isLoadingSuccess, setLoadingSuccess] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isFiltered, setFiltered] = useState(false);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [profileFormValues, setProfileFormValues] = useState({
    'user-name': '',
    'user-email': '',
  });

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .checkToken()
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            setProfileFormValues({
              'user-name': res.name,
              'user-email': res.email,
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  const login = (email, password) => {
    setDataLoading(true);
    mainApi
      .login(email, password)
      .then((res) => {
        localStorage.setItem('isLoggedIn', true);
        setCurrentUser(res);

        setFormValues({
          email: '',
          password: '',
        });
        handleLogin();
        setLoadingError(false);
        setLoadingErrorMessage('');
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.error(`Error: ${err.status} ${err.statusText}`);
        if (err.status === 401) {
          setLoadingErrorMessage('Введены неправильный логин или пароль');
        } else {
          setLoadingErrorMessage(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          );
        }
        setLoadingError(true);
      })
      .finally(() => setDataLoading(false));
  };

  const register = (name, email, password) => {
    setDataLoading(true);
    mainApi
      .register(name, email, password)
      .then(() => {
        login(email, password);
        setLoadingError(false);
        setLoadingErrorMessage('');
      })
      .catch((err) => {
        console.error(err);
        setLoadingErrorMessage(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        );
        setLoadingError(true);
      })
      .finally(() => setDataLoading(false));
  };

  const updateUserInfo = (name, email) => {
    setDataLoading(true);
    mainApi
      .updateUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        setLoadingError(false);
        setLoadingErrorMessage('');
        setLoadingSuccess(true);
      })
      .catch((err) => {
        console.error(`Error: ${err.status} ${err.statusText}`);
        setLoadingErrorMessage(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        );
        setLoadingError(true);
        setLoadingSuccess(false);
      })
      .finally(() => setDataLoading(false));
  };

  const deleteMovie = (deleteMovieId) => {
    mainApi
      .deleteLike(deleteMovieId)
      .then(() => {
        setFilteredSavedMovies(
          filteredSavedMovies.filter((movie) => movie._id !== deleteMovieId)
        );
        setSavedMovies(
          savedMovies.filter((movie) => movie._id !== deleteMovieId)
        );
      })
      .catch((err) => console.error(`Error: ${err.status} ${err.statusText}`));
  };

  const handleChangeLikeMovieStatus = (movie, isLiked) => {
    if (!isLiked) {
      mainApi
        .likeMovie(movie)
        .then((res) => {
          setSavedMovies((prevState) => [res, ...prevState]);
        })
        .catch((err) =>
          console.error(`Error: ${err.status} ${err.statusText}`)
        );
    } else {
      const currentMovie = savedMovies.filter(
        (savedMovie) => savedMovie.id === movie.id
      );
      deleteMovie(currentMovie[0]._id);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              element={
                <Movies
                  isDataLoading={isDataLoading}
                  setDataLoading={setDataLoading}
                  setSavedMovies={setSavedMovies}
                  isLoadingError={isLoadingError}
                  setLoadingError={setLoadingError}
                  handleChangeLikeMovieStatus={handleChangeLikeMovieStatus}
                  checked={checked}
                  setChecked={setChecked}
                  savedMovies={savedMovies}
                />
              }
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              element={
                <SavedMovies
                  savedMovies={savedMovies}
                  deleteMovie={deleteMovie}
                  checked={checked}
                  setChecked={setChecked}
                  isFiltered={isFiltered}
                  setFiltered={setFiltered}
                  filteredSavedMovies={filteredSavedMovies}
                  setFilteredSavedMovies={setFilteredSavedMovies}
                  setSavedMovies={setSavedMovies}
                />
              }
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              element={
                <Profile
                  setLoggedIn={setLoggedIn}
                  loadingErrorMessage={loadingErrorMessage}
                  setLoadingErrorMessage={setLoadingErrorMessage}
                  setLoadingError={setLoadingError}
                  isLoadingError={isLoadingError}
                  updateUserInfo={updateUserInfo}
                  setLoadingSuccess={setLoadingSuccess}
                  isLoadingSuccess={isLoadingSuccess}
                  isDataLoading={isDataLoading}
                  setChecked={setChecked}
                  formValues={profileFormValues}
                  setFormValues={setProfileFormValues}
                />
              }
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute
              element={
                <Register
                  loadingErrorMessage={loadingErrorMessage}
                  setLoadingErrorMessage={setLoadingErrorMessage}
                  setLoadingError={setLoadingError}
                  isLoadingError={isLoadingError}
                  register={register}
                  isDataLoading={isDataLoading}
                />
              }
              loggedIn={!loggedIn}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRoute
              element={
                <Login
                  loadingErrorMessage={loadingErrorMessage}
                  setLoadingErrorMessage={setLoadingErrorMessage}
                  setLoadingError={setLoadingError}
                  isLoadingError={isLoadingError}
                  formValues={formValues}
                  setFormValues={setFormValues}
                  login={login}
                  isDataLoading={isDataLoading}
                />
              }
              loggedIn={!loggedIn}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
