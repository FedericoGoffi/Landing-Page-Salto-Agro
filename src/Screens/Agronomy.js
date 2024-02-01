import React, { useState } from 'react';
import styles from './Agronomy.module.css';
import FondoPantalla from '../Img/AgronomíaFondo.webp';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const Agronomy = () => {
  const [showMoreForrajeras, setShowMoreForrajeras] = useState(false);
  const [showMoreAgricolas, setShowMoreAgricolas] = useState(false);
  const [showMoreAgroquimicos, setShowMoreAgroquimicos] = useState(false);
  const [showMoreServicios, setShowMoreServicios] = useState(false);

  const toggleShowMoreForrajeras = () => {
    setShowMoreForrajeras((prevShowMore) => !prevShowMore);
  };

  const toggleShowMoreAgricolas = () => {
    setShowMoreAgricolas((prevShowMore) => !prevShowMore);
  };

  const toggleShowMoreAgroquimicos = () => {
    setShowMoreAgroquimicos((prevShowMore) => !prevShowMore);
  };

  const toggleShowMoreServicios = () => {
    setShowMoreServicios((prevShowMore) => !prevShowMore);
  };

  const forrajerasText = `
    Avena amarilla

    Avena strigosa

    Alfalfa

    Maíz para silaje

    Sorgo forrajero

    Sorgo azucarado y nervadura marrón

    Sorgo granífero doble propósito
    
    Otras forrajeras
  `;

  const semillasAText = `
    Trigo

    Soja

    Maíz

    Sorgo

    Girasol

    Otras
  `;

  const agroquímicosText = `
    Herbicidas

    Insecticidas

    Fungicidas

    Inoculantes

    Curasemillas

    Coadyuvantes y aditivos
  `;

  const servicioProfText = `
    Monitoreo de cultivos

    Muestreo y análisis de suelos,
    interpretación de resultados y 
    recomendaciones técnicas

    Asesoramiento agronómico

    Administración de empresas
    agropecuarias
`;

  const preStyle = {
    whiteSpace: 'pre-wrap',
    fontSize: '19px',
    color: 'dark',
  };

  return (
    <div className={styles.Container}>
    <div className={styles.Agronomy}>
      <img className={styles.ImgFondo} src={FondoPantalla} alt="Fondo de Pantalla" />
      <div className={styles.H2Contact}>
        <h2>AGRONOMÍA</h2>
      </div>
      <div className={styles.WavyTransitions}>
        <svg className={styles.WavySvg} viewBox="0 0 500 150" preserveAspectRatio="none">
          <path className={styles.WavyPath} d="M-0.00,49.88 C150.00,149.67 271.39,-49.88 500.00,49.88 L500.00,150.00 L-0.00,150.00 Z"></path>
        </svg>
      </div>
    </div>
    <div className={styles.slideConteiner}>
      <div className={styles.sliderContainer}>
        <div className={styles.slide}>
          <p>SEMILLAS FORRAJERAS:</p>
          {showMoreForrajeras ? (
            <div>
              <pre style={preStyle}>{forrajerasText}</pre>
              <button className={styles.VerMas} onClick={toggleShowMoreForrajeras}>
                VER MENOS <FaArrowUp />
              </button>
            </div>
          ) : (
            <button className={styles.VerMas} onClick={toggleShowMoreForrajeras}>
              VER MÁS <FaArrowDown />
            </button>
          )}
        </div>

        <div className={styles.slide}>
          <p>SEMILLAS AGRÍCOLAS:</p>
          {showMoreAgricolas ? (
            <div>
              <pre style={preStyle}>{semillasAText}</pre>
              <button className={styles.VerMas} onClick={toggleShowMoreAgricolas}>
                VER MENOS <FaArrowUp />
              </button>
            </div>
          ) : (
            <button className={styles.VerMas} onClick={toggleShowMoreAgricolas}>
              VER MÁS <FaArrowDown />
            </button>
          )}
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.slide}>
          <p>AGROQUÍMICOS:</p>
          {showMoreAgroquimicos ? (
            <div>
              <pre style={preStyle}>{agroquímicosText}</pre>
              <button className={styles.VerMas} onClick={toggleShowMoreAgroquimicos}>
                VER MENOS <FaArrowUp />
              </button>
            </div>
          ) : (
            <button className={styles.VerMas} onClick={toggleShowMoreAgroquimicos}>
              VER MÁS <FaArrowDown />
            </button>
          )}
        </div>

        <div className={styles.slide}>
          <p>SERVICIOS PROFESIONALES:</p>
          {showMoreServicios ? (
            <div>
              <pre style={preStyle}>{servicioProfText}</pre>
              <button className={styles.VerMas} onClick={toggleShowMoreServicios}>
                VER MENOS <FaArrowUp />
              </button>
            </div>
          ) : (
            <button className={styles.VerMas} onClick={toggleShowMoreServicios}>
              VER MÁS <FaArrowDown />
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Agronomy;