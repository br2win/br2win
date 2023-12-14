import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import UniqueBcoinPage from './components/pages/UniqueBcoinPage/UniqueBcoinPage';
import Footer from './components/footer/Footer';
import Bcoin from './components/pages/bcoin/Bcoin';
import { Help } from './components/help/Help';
import Qrcode from './components/qrcore/Qrcode';
import Coin from './components/Coin/Coin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/bcoins' element={<Bcoin />} />
          <Route path='/bcoin/:id' element={<UniqueBcoinPage />} />
          <Route path='/ajuda' element={<Help />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
