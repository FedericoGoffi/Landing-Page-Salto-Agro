import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Agronomy.module.css';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Agronomy = () => {
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
      <h2>AGRONOMÍA:</h2>
      <div className={styles.DivButtons}>
            <button className={styles.ButtonPrev} onClick={() => slider?.current?.slickPrev()}><FaArrowLeft/></button>
            <button className={styles.ButtonNext} onClick={() => slider?.current?.slickNext()}><FaArrowRight/></button>
          </div>
        <Slider ref={slider} {...sliderSettings}>
          <div className={styles.slide}>
            <p>Semillas forrajeras:</p>
            <ul>
              <li>Avena amarilla</li>
              <li>Avena strigosa</li>
              <li>Alfalfa</li>
              <li>Maíz para silaje</li>
              <li>Sorgo forrajero</li>
              <li>Sorgo azucarado y nervadura marrón</li>
              <li>Sorgo granífero doble propósito</li>
              <li>Otras forrajeras</li>
            </ul>
          </div>
          <div className={styles.slide}>
            <p>Semillas agrícolas:</p>
            <ul>
              <li>Trigo</li>
              <li>Soja</li>
              <li>Maíz</li>
              <li>Sorgo</li>
              <li>Girasol</li>
              <li>Otras</li>
            </ul>
          </div>
          <div className={styles.slide}>
            <p>Agroquímicos:</p>
            <ul>
              <li>Herbicidas</li>
              <li>Insecticidas</li>
              <li>Fungicidas</li>
              <li>Inoculantes</li>
              <li>Curasemillas</li>
              <li>Coadyuvantes y aditivos</li>
            </ul>
          </div>
        </Slider>
    </div>
  );
};

export default Agronomy;