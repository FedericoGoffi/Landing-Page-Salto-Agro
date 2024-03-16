import React, { useEffect, useState } from 'react';
import styles from './Homepage.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="contenedor">
        <div className="contenedor_loader">
          <div className="loader"></div>
        </div>
        <div className="cargando">Cargando...</div>
      </div>
    );
  }

  return (
    <div className={styles.Container}>
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
    </div>
  );
};

export default Homepage;


