import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddListing from './pages/AddListing'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddListing />} />
      </Routes>
      <ScrollToTop />
    </div>
  )
}

export default App
