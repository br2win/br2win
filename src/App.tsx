import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import UniqueBcoinPage from './components/pages/UniqueBcoinPage/UniqueBcoinPage';
import Footer from './components/footer/Footer';
import Bcoin from './components/pages/bcoin/Bcoin';
import { Help } from './components/help/Help';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '4em', color: '#fff', marginBottom: '10px' }}>😞</h1>
      <h1 style={{ color: '#fff' }}>Oops! Página não encontrada</h1>
      <p style={{ fontSize: '1.5em', color: '#fff', marginTop: '20px' }}>
        Parece que você se perdeu. A página que você está procurando não foi encontrada.
      </p>
      <p style={{ color: '#fff' }}>
        Volte para <a href="/" style={{ color: '#fff' }}>página inicial</a> ou tente outra rota.
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/bcoins" element={<Bcoin />} />
          <Route path="/bcoin/:id" element={<UniqueBcoinPage />} />
          <Route path="/ajuda" element={<Help />} />
          {/* Rota curinga para 404 */}
          <Route path="/404" element={<NotFound />} />
          {/* Redirecionar para 404 se a rota não for encontrada */}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
