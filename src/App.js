import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Screens/Homepage';
import AboutUs from './Screens/AboutUs';
import Productcatalog from './Screens/Productcatalog';
import Contact from './Screens/Contact';
import NavBar from './Components/NavBar';
import Contacto from './Screens/Contacto';
import Agronomy from './Screens/Agronomy';
import TamboGanadería from './Screens/TamboGanadería'
import Footer from './Screens/Footer';
import ScrollToTop from './Components/ScrollToTop';
import ScrollToTopButton from './Components/ScrollToTopButton';

function App() {

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <NavBar />
                <Homepage />
                <AboutUs />
                <Productcatalog />
                <Contacto />
                <Footer />
              </React.Fragment>
            }
          />
          <Route
            path="/Contactos"
            element={
              <React.Fragment>
                <NavBar />
                <Contact />
                <Footer />
              </React.Fragment>
            }
          />
          <Route
            path="/Agronomía"
            element={
              <React.Fragment>
                <NavBar />
                <Agronomy />
                <Footer />
              </React.Fragment>
            }
          />

          <Route
            path="/TamboGanadería"
            element={
              <React.Fragment>
                <NavBar />
                <TamboGanadería />
                <Footer />
              </React.Fragment>
            }
          />
        </Routes>
        <ScrollToTopButton scrollY={scrollY} />
      </div>
    </BrowserRouter>
  );
}

export default App;