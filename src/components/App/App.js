import { useState } from 'react';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Main loggedIn={loggedIn} />} />
      <Route
        path="/movies"
        element={<ProtectedRoute element={<Movies />} loggedIn={loggedIn} />}
      />
      <Route
        path="/saved-movies"
        element={
          <ProtectedRoute element={<SavedMovies />} loggedIn={loggedIn} />
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute
            element={<Profile setLoggedIn={setLoggedIn} />}
            loggedIn={loggedIn}
          />
        }
      />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
