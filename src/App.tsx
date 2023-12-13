import { HashRouter, Route, Routes } from 'react-router-dom'
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
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path='/bcoins' element={<Bcoin />}></Route>
          <Route path='/bcoin/:id' element={<UniqueBcoinPage />}></Route>
          <Route path='/ajuda' element={<Help />}></Route>
        </Routes>
      </HashRouter>  
      <Footer />
    </>
  )
}

export default App
