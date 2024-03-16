import React from 'react';
import styles from './newWebs.module.css';

const newWebs = () => {
  return (
    <div className={styles.container}>
        <h2>NOTICIAS:</h2>
        <h3>Le invitamos a visitar el siguiente <a href='http://www.saltoagro.com.ar/' target="_blank" rel="noreferrer">enlace</a> para acceder a las últimas noticias relacionadas con nuestra empresa. Manténgase informado sobre los desarrollos más recientes, eventos y logros que destacan nuestra trayectoria y compromiso.</h3>
    </div>
  )
}

export default newWebs