import { useState } from 'react'
import MainLayout from './components/header'
import ResponsiveGrid from './components/grid'
import Player from './components/player'
import Payment from './components/payment'
import './App.css'
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';



function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);


  return (
    <>
    <div className=''>
    <MainLayout />
    <Router>
      <Routes>
        <Route path="/" element={<ResponsiveGrid setSelectedMovie={setSelectedMovie} />} />
        <Route path="/player" element={<Player movie={selectedMovie} />} />
        <Route path="/payment" element={<Payment movie={selectedMovie} />} />
      </Routes>
    </Router>
    <Footer />
 
    </div>
    </>
  )
}

export default App
