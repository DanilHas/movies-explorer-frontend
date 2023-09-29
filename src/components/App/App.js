import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import AuthHeader from '../AuthHeader/AuthHeader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      {loggedIn ? <AuthHeader /> : <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={<ProtectedRoute element={<Movies />} loggedIn={loggedIn} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
