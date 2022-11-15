import './App.css';
import { useState, React } from 'react';
import Places from './Pages/PLACES/Places';
import Navbar from './components/Navbar/Navbar';
import Homepage from './Pages/HomePage/Homepage';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom"
function App() {
  const [modal, setModal] = useState(false)
  const handleToggle = () => {
    setModal(prev => !prev)
  }
  return (
    <div className={modal ? "api" : "App"}>
      <Navbar onclick={handleToggle} />
      <Routes>
        <Route exact path='/' element={ <Homepage onclick={handleToggle}  modal={modal} />} />
        <Route path='/places' element={ <Places onclick={handleToggle} modal={modal} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
