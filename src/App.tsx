import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import UniqueBcoinPage from './components/pages/UniqueBcoinPage/UniqueBcoinPage';
import Footer from './components/footer/Footer';
import Bcoin from './components/pages/bcoin/Bcoin';
import { Help } from './components/help/Help';

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Oops! Página não encontrada. Volte para <a href="/">página inicial</a> ou tente outra rota.</p>
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
          
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
