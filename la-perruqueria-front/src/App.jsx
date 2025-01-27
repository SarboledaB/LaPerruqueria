import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import FloatingWhatsappButton from './components/FloatingWhatsappButton/FloatingWhatsappButton.jsx';
import CustomFooter from './components/CustomFooter/CustomFooter.jsx';
import Food from './pages/Food/Food.jsx';
import Spa from './pages/Spa/Spa.jsx';
import PetShop from './pages/PetShop/PetShop.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/concentrados-y-alimentos" element={<Food/>} />
          <Route path="/spa-de-mascotas" element={<Spa/>} />
          <Route path="/petshop" element={<PetShop/>} />
        </Routes>
        <FloatingWhatsappButton/>
        <CustomFooter/>
      </BrowserRouter>
  );
}

export default App;
