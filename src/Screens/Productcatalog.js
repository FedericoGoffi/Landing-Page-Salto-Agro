import React from 'react';
import { Link } from 'react-router-dom';
import FondoTexto1 from '../Img/Agronomía.webp';
import FondoTexto2 from '../Img/TamboGanadería.jpg';
import styles from './Productcatalog.module.css';

const Productcatalog = () => {
  return (
    <div className={styles.Container}>
      <div><h2>PRODUCTOS Y SERVICIOS</h2></div>
      <div className={styles.ImgContainer}>
        <img className={styles.ImgTexto} src={FondoTexto1} alt='Fondo Texto' />
        <div className={styles.TextOverlay}>
          <h3>AGRONOMÍA</h3>
          <p>Productos relacionados con la agronomía</p>
          <Link to="/Agronomía" rel="noopener noreferrer">
            <button className={styles.BotonCatalogo}>Ver Productos</button>
          </Link>
        </div>
      </div>
      <div className={styles.ImgContainer}>
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