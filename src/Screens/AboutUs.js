import React, { useState } from 'react';
import styles from './AboutUs.module.css';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const AboutUs = () => {

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const longText = `
    Somos una empresa Argentina integrada por profesionales del sector agropecuario. Nuestra trayectoria profesional tiene sus raíces en la administración de empresas agropecuarias, el asesoramiento a productores y en nuestra propia historia como productores.

    Conocemos los problemas y desafíos de la producción agropecuaria porque estamos allí y somos parte. Siempre intentamos ofrecer soluciones reales, adecuadas a cada situación particular, con la mejor relación costo/prestación y con atención personalizada.

    Nos gusta decir que los productos y servicios que ofrecemos son los que utilizamos nosotros mismos.
     
    Nos dedicamos a la producción de semillas, a la comercialización de insumos agro-veterinarios en general y brindamos servicios profesionales de monitoreo de cultivos, asesoramiento agronómico y administración de empresas agropecuarias.

    Nuestra área de cobertura habitual abarca la provincia de Santa Fe, llegando eventualmente a provincias limítrofes y otros puntos de la Argentina.
  `;

  const preStyle = {
    whiteSpace: 'pre-wrap',
    fontSize: '1.3em', 
    color: 'dark',
  };

  return (
    <div className={styles.Contenedor}>
      <div className={styles.QuienesSomos}>
        <h2>QUIÉNES SOMOS:</h2>
        <pre style={preStyle}>{showMore ? longText : longText.split('\n\n')[0]}</pre>
        <button className={styles.VerMas} onClick={toggleShowMore}>
          {showMore ? 'VER MENOS' : 'VER MÁS'} {showMore ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
