import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <div className={styles.Contenedor}>
      <div className={styles.QuienesSomos}>
        <h2>QUIÉNES SOMOS:</h2>
        <p>Somos una empresa Argentina integrada por profesionales del sector agropecuario. Nuestra trayectoria profesional tiene sus raíces en la administración de empresas agropecuarias, el asesoramiento a productores y en nuestra propia historia como productores.</p>
        <p>Conocemos los problemas y desafíos de la producción agropecuaria porque estamos allí y somos parte. Siempre intentamos ofrecer soluciones reales, adecuadas a cada situación particular, con la mejor relación costo/prestación y con atención personalizada.</p>
        <h3>Nos gusta decir que los productos y servicios que ofrecemos son los que utilizamos nosotros mismos.</h3>
        <p>Nos dedicamos a la producción de semillas, a la comercialización de insumos agro-veterinarios en general y brindamos servicios profesionales de monitoreo de cultivos, asesoramiento agronómico y administración de empresas agropecuarias.</p>
        <p>Nuestra área de cobertura habitual abarca la provincia de Santa Fe, llegando eventualmente a provincias limítrofes y otros puntos de la Argentina.</p>
      </div>
    </div>
  )
}

export default AboutUs