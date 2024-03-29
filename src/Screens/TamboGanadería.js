import React, { useState, useEffect } from 'react';
import styles from './TamboGanadería.module.css';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const Tambo = ({ onLoadingChange }) => {
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      onLoadingChange(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [onLoadingChange]);

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

  const InsumosText = `
- Grandes animales

- Pequeños animales

- Insumos y accesorios
  rurales
  `;

  const DispositivosText = `
- Detectores de mastitis

- Aplicadores de no retorno con 
  cepillo circular para
  ahorro de sellador

- Etiquetas autoadhesivas para
  detección de celos
  `;

  const ProductosText = `
- Detergentes para ordeñadoras y
  equipos de frío

- Selladores de pezones

- Desinfectantes y 
  detergentes para uso manual

  `;

  const HerramientasText = `
<br />
<br />
<br />
- ENLACE A HERRAMIENTA DE GESTIÓN DE EMPRESAS PRODUCTORAS DE LECHE:
<a href="https://milecheria.ar" target="_blank" rel="noopener noreferrer">https://milecheria.ar</a>
<br />
<br />
<br />
  `;

  const preStyle = {
    whiteSpace: 'pre-wrap',
    fontSize: '19px',
    color: 'dark',
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Tambo_Ganaderia}>
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
        <div className={styles.sliderConteiner}>
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

        <div className={styles.sliderConteiner}>
          <div className={styles.slide}>
            <p>PRODUCTOS QUÍMICOS <br/> PARA TAMBO:</p>
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
