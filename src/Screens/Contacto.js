import React from 'react'
import styles from './Contacto.module.css'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <div className={styles.ConteinerContacto}>
      <div  className={styles.TextoContacto}>
        <h3>Descubre las condiciones comerciales</h3>
        <p>Contamos con una extensa red de servicios que colaboran con cada cliente para identificar <br/> las soluciones productivas más adecuadas.</p>
      </div>
      <div className={styles.BotonContacto}>
        <Link to="/Contactos" rel="noopener noreferrer">
          <button><FaArrowRight /><span>Contactos</span></button>
        </Link>
      </div>
    </div>
  )
}

export default Contacto;
