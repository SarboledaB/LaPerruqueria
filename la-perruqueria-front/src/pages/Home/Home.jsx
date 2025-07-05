import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './Home.scss';
import Banner from '../../components/Banner/Banner.jsx';
import Cards from '../../components/Cards/Cards.jsx';
import Album from '../../components/Album/Album.jsx';
import Comments from '../../components/Comments/Comments.jsx';
import PetTips from '../../components/PetTips/PetTips.jsx';
import WelcomeModal from '../../components/WelcomeModal/WelcomeModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modalShown = Cookies.get('welcomeModalShown');
    if (!modalShown) {
      setShowModal(true);
      Cookies.set('welcomeModalShown', 'true', { expires: 1 }); // Expires in 1 day
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="home-container">
      {showModal && <WelcomeModal onClose={handleCloseModal} />}
      <Banner/>
      <Cards/>
      <Album/>
      <Comments/>
      <PetTips/>
    </div>
  );
};

export default Home;
