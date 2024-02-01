import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import FondoTexto1 from '../Img/AgronomíaFondo.webp';
import FondoTexto2 from '../Img/TamboGanadería.webp';
import styles from './Productcatalog.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Productcatalog = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.Container}>
      <div data-aos="fade-up"><h2>PRODUCTOS Y SERVICIOS</h2></div>
      <div data-aos="fade-up" className={styles.ImgContainer}>
        <img className={styles.ImgTexto} src={FondoTexto1} alt='Fondo Texto' />
        <div className={styles.TextOverlay}>
          <h3>AGRONOMÍA</h3>
          <p>Productos relacionados con la agronomía</p>
          <Link to="/Agronomía" rel="noopener noreferrer">
            <button className={styles.BotonCatalogo}>Ver Productos</button>
          </Link>
        </div>
      </div>
      <div data-aos="fade-up" className={styles.ImgContainer}>
        <img className={styles.ImgTexto} src={FondoTexto2} alt='Fondo Texto' />
        <div className={styles.TextOverlay}>
          <h3>TAMBO - GANADERÍA</h3>
          <p>Productos relacionados con Tambo - Ganadería</p>
          <Link to="/TamboGanadería">
            <button className={styles.BotonCatalogo}>Ver Productos</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Productcatalog;