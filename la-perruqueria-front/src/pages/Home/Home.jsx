import './Home.scss';
import Banner from '../../components/Banner/Banner.jsx';
import Cards from '../../components/Cards/Cards.jsx';
import Album from '../../components/Album/Album.jsx';
import Comments from '../../components/Comments/Comments.jsx';
import PetTips from '../../components/PetTips/PetTips.jsx';

const Home = () => {
  return (
    <div className="home-container">
      <Banner/>
      <Cards/>
      <Album/>
      <Comments/>
      <PetTips/>
    </div>
  );
};

export default Home;
