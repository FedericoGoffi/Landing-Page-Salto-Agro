import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Screens/Homepage';
import AboutUs from './Screens/AboutUs';
import Productcatalog from './Screens/Productcatalog';
import Contact from './Screens/Contact';
import NavBar from './Components/NavBar';
import Contacto from './Screens/Contacto';
import Agronomy from './Screens/Agronomy';
import TamboGanadería from './Screens/TamboGanadería';
import Footer from './Screens/Footer';
import ScrollToTop from './Hook/ScrollToTop';
import ScrollToTopButton from './Hook/ScrollToTopButton';
import WhatsAppButton from './Hook/WhatsAppButton';

function App() {
  const [loading, setLoading] = useState(true);
  const [specificRouteLoading, setSpecificRouteLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [homeVisible, setHomeVisible] = useState(true);

  const toggleHomeVisibility = () => {
    setHomeVisible(!homeVisible);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleSpecificRouteLoading = (loading) => {
    setSpecificRouteLoading(loading);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {loading || specificRouteLoading ? (
          <div className="contenedor">
            <div className="contenedor_loader">
              <div className="loader"></div>
            </div>
            <div className="cargando">Cargando...</div>
          </div>
        ) : (
          <React.Fragment>
            <ScrollToTop />
            <Routes>
              <Route
                path="/"
                element={
                  <React.Fragment>
                    <NavBar setNavBarOpen={toggleHomeVisibility} setHomeVisible={setHomeVisible} />
                    {homeVisible && <Homepage />}
                    {homeVisible && <AboutUs />}
                    {homeVisible && <Productcatalog />}
                    {homeVisible && <Contacto />}
                    {homeVisible && <Footer />}
                  </React.Fragment>
                }
              />
              <Route
                path="/Contactos"
                element={
                  <React.Fragment>
                    <NavBar setNavBarOpen={toggleHomeVisibility} setHomeVisible={setHomeVisible} />
                    {homeVisible && <Contact onLoadingChange={handleSpecificRouteLoading} />}
                    {homeVisible && <Footer />}
                  </React.Fragment>
                }
              />
              <Route
                path="/Agronomía"
                element={
                  <React.Fragment>
                    <NavBar setNavBarOpen={toggleHomeVisibility} setHomeVisible={setHomeVisible} />
                    {homeVisible && <Agronomy onLoadingChange={handleSpecificRouteLoading} />}
                    {homeVisible && <Footer />}
                  </React.Fragment>
                }
              />
              <Route
                path="/TamboGanadería"
                element={
                  <React.Fragment>
                    <NavBar setNavBarOpen={toggleHomeVisibility} setHomeVisible={setHomeVisible} />
                    {homeVisible && <TamboGanadería onLoadingChange={handleSpecificRouteLoading} />}
                    {homeVisible && <Footer />}
                  </React.Fragment>
                }
              />
            </Routes>
            <WhatsAppButton scrollY={scrollY} />
            <ScrollToTopButton scrollY={scrollY} />
          </React.Fragment>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;



