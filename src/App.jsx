
import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


function App() {

  return (
    <>
     <BrowserRouter >
      <NavBar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
