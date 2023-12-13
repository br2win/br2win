import {HashRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import UniqueBcoinPage from './components/pages/UniqueBcoinPage/UniqueBcoinPage'
import Footer from './components/footer/Footer'
import Bcoin from './components/pages/bcoin/Bcoin'
import { Help } from './components/help/Help'
import Qrcode from './components/qrcore/Qrcode'
import Coin from './components/Coin/Coin'

function App() {

  return (
    <>
     <Router>
      <Navbar />
        <Routes>
          <Route path='/bcoins' element={<Bcoin />}></Route>
          <Route path='/bcoin/:id' element={<UniqueBcoinPage />}></Route>
          <Route path='/ajuda' element={<Help />}></Route>
        </Routes>
      <Footer />
      </Router>  
    </>
  )
}

export default App
