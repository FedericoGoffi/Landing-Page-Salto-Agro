import React, { useEffect } from 'react';
import styles from './Homepage.module.css';
import Fondo from '../Img/FondoPantalla.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.textoSobreImagen}>
      <div className={styles.textoContainer}>
        <h2 className={styles.Titulo}>SOLUCIONES PARA EL AGRO</h2>
        <p className={styles.SubTitulo}>
          ADMINISTRACIÓN DE EMPRESAS AGROPECUARIAS - ASESORAMIENTO A PRODUCTORES
        </p>
      </div>
      <div className={styles.WavyTransitions}>
        <svg className={styles.WavySvg} viewBox="0 0 500 150" preserveAspectRatio="none">
          <path className={styles.WavyPath} d="M-0.00,49.88 C150.00,149.67 271.39,-49.88 500.00,49.88 L500.00,150.00 L-0.00,150.00 Z"></path>
        </svg>
      </div>
      <img src={Fondo} alt="Fondo de pantalla" className={styles.ImgFondoP} />
    </div>
  );
};

export default Homepage;


