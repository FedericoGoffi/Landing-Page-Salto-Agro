import React, {useEffect} from 'react'
import styles from './Contacto.module.css'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contacto = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.ConteinerContacto}>
      <div data-aos="fade-up" className={styles.TextoContacto}>
        <h3>Conocé las condiciones comerciales</h3>
        <p>Tenemos una amplia red de servicios que analizan junto a cada cliente las mejores soluciones productivas.</p>
      </div>
      <div className={styles.BotonContacto}>
        <Link to="/Contactos" rel="noopener noreferrer" data-aos="fade-up">
          <button><FaArrowRight /><span>Contáctanos</span></button>
        </Link>
      </div>
    </div>
  )
}

export default Contacto;
