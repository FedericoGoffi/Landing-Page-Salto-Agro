import React, { useState } from 'react';
import styles from './TamboGanadería.module.css';
import FondoPantalla from '../Img/TamboGanaderíaFondo.webp';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const Tambo = () => {
  const [showMoreInsumos, setShowMoreInsumos] = useState(false);
  const [showMoreDispositivos, setShowMoreDispositivos] = useState(false);
  const [showMoreProductos, setShowMoreProductos] = useState(false);
  const [showMoreHerramientas, setShowMoreHerramientas] = useState(false);

  const toggleShowMoreInsumos = () => {
    setShowMoreInsumos((prevShowMore) => !prevShowMore);
  };

  const toggleShowMoreDispositivos = () => {
    setShowMoreDispositivos((prevShowMore) => !prevShowMore);
  };

  const toggleShowMoreProductos = () => {
    setShowMoreProductos((prevShowMore) => !prevShowMore);
  };

  const toggleShowMoreHerramientas = () => {
    setShowMoreHerramientas((prevShowMore) => !prevShowMore);
  };

  const InsumosText = `
  Grandes animales

  Pequeños animales

  Insumos y accesorios rurales
  `;

  const DispositivosText = `
  Detectores de mastitis

  Aplicadores de no retorno con cepillo circular para ahorro de sellador

  Etiquetas autoadhesivas para detección de celos
  `;

  const ProductosText = `
  Detergentes para ordeñadoras y equipos de frío

  Selladores de pezones

  Desinfectantes y detergentes para uso manual
  `;

  const HerramientasText = `
  ENLACE A FORMULARIO DE DESCARGA - OLE! 5.5
  <br />
  <a href="https://forms.gle/oVDk4Z5bDnFi751JA" target="_blank" rel="noopener noreferrer">https://forms.gle/oVDk4Z5bDnFi751JA</a>
`;

  const preStyle = {
    whiteSpace: 'pre-wrap',
    fontSize: '19px',
    color: 'dark',
  };

  return (
    <div className={styles.Container}>
    <div className={styles.Tambo_Ganaderia}>
      <img className={styles.ImgFondo} src={FondoPantalla} alt="Fondo de Pantalla" />
      <div className={styles.H2Contact}>
        <h2>TAMBO - GANADERÍA</h2>
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
          <p>INSUMOS VETERINARIOS <br/> Y ACCESORIOS RURALES:</p>
          {showMoreInsumos ? (
            <div>
              <pre style={preStyle}>{InsumosText}</pre>
              <button className={styles.VerMas} onClick={toggleShowMoreInsumos}>
                VER MENOS <FaArrowUp />
              </button>
            </div>
          ) : (
            <button className={styles.VerMas} onClick={toggleShowMoreInsumos}>
              VER MÁS <FaArrowDown />
            </button>
          )}
        </div>

        <div className={styles.slide}>
          <p>DISPOSITIVOS:</p>
          {showMoreDispositivos ? (
            <div>
              <pre style={preStyle}>{DispositivosText}</pre>
              <button className={styles.VerMas} onClick={toggleShowMoreDispositivos}>
                VER MENOS <FaArrowUp />
              </button>
            </div>
          ) : (
            <button className={styles.VerMas} onClick={toggleShowMoreDispositivos}>
              VER MÁS <FaArrowDown />
            </button>
          )}
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.slide}>
          <p>PRODUCTOS QUÍMICOS PARA TAMBO:</p>
          {showMoreProductos ? (
            <div>
              <pre style={preStyle}>{ProductosText}</pre>
              <button className={styles.VerMas} onClick={toggleShowMoreProductos}>
                VER MENOS <FaArrowUp />
              </button>
            </div>
          ) : (
            <button className={styles.VerMas} onClick={toggleShowMoreProductos}>
              VER MÁS <FaArrowDown />
            </button>
          )}
        </div>

        <div className={styles.slide}>
          <p>HERRAMIENTAS DE GESTIÓN DE <br/> EMPRESAS PRODUCTORAS DE LECHE:</p>
          {showMoreHerramientas ? (
            <div>
              <div dangerouslySetInnerHTML={{ __html: HerramientasText }} />
              <button className={styles.VerMas} onClick={toggleShowMoreHerramientas}>
                VER MENOS <FaArrowUp />
              </button>
            </div>
          ) : (
            <button className={styles.VerMas} onClick={toggleShowMoreHerramientas}>
              VER MÁS <FaArrowDown />
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Tambo;