import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import Header from '../Header/Header';
import AuthHeader from '../AuthHeader/AuthHeader';
import Footer from '../Footer/Footer';

function Main({ loggedIn }) {
  return (
    <>
      {loggedIn ? <AuthHeader /> : <Header />}
      <main className="content">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

export default Main;
