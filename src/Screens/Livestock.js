import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Livestock.module.css';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Livestock = () => {
  const sliderSettings = {
    arrows: false,
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slider = React.useRef(null);

  return (
    <div className={styles.sliderContainer}>
      <h2>TAMBO - GANADERÍA:</h2>
      <div className={styles.DivButtons}>
            <button className={styles.ButtonPrev} onClick={() => slider?.current?.slickPrev()}><FaArrowLeft/></button>
            <button className={styles.ButtonNext} onClick={() => slider?.current?.slickNext()}><FaArrowRight/></button>
          </div>
        <Slider ref={slider} {...sliderSettings}>
          <div className={styles.slide}>
            <p>Insumos veterinarios y <br/>accesorios rurales:</p>
            <ul>
              <li>Grandes animales</li>
              <li>Pequeños animales</li>
              <li>Insumos y accesorios rurales</li>
            </ul>
          </div>
          <div className={styles.slide}>
            <p>Dispositivos:</p>
            <ul>
              <li>Detectores de mastitis</li>
              <li>Aplicadores de no retorno con cepillo<br/>circular para ahorro de sellador</li>
              <li>Etiquetas autoadhesivas para detección de celos</li>
            </ul>
          </div>
          <div className={styles.slide}>
            <p>Productos químicos para tambo:</p>
            <ul>
              <li>Detergentes para ordeñadoras y equipos de frío</li>
              <li>Selladores de pezones</li>
              <li>Desinfectantes y detergentes para uso manual</li>
            </ul>
          </div>
          <div className={styles.slide}>
            <p>Herramientas de gestión de empresas<br/>productoras de leche:</p>
            <ul>
              <li>ENLACE A HERRAMIENTA:</li>
              <li><a className={styles.Formulario} href='https://forms.gle/oVDk4Z5bDnFi751JA'>https://forms.gle/oVDk4Z5bDnFi751JA</a></li>
            </ul>
          </div>
        </Slider>
    </div>
  );
};

export default Livestock;