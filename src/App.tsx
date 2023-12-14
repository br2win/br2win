import { HashRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import UniqueBcoinPage from './components/pages/UniqueBcoinPage/UniqueBcoinPage';
import Footer from './components/footer/Footer';
import Bcoin from './components/pages/bcoin/Bcoin';
import { Help } from './components/help/Help';
import Qrcode from './components/qrcore/Qrcode';
import Coin from './components/Coin/Coin';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se a rota é inválida e redirecionar para a página 404
    const hash = window.location.hash;
    if (hash && !document.getElementById(hash.slice(1))) {
        navigate('/404');
    }
}, [navigate]);


  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/bcoins' element={<Bcoin />} />
          <Route path='/bcoin/:id' element={<UniqueBcoinPage />} />
          <Route path='/ajuda' element={<Help />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
