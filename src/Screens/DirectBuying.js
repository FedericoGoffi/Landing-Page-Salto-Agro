import React from 'react'
import styles from './DirectBuying.module.css'
import { BrowserRouter, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import ProductoUno from '../Img/Producto1.jpg'
import ProductoDos from '../Img/Producto2.jpg'


const DirectBuying = () => {
  const sliderSettings = {
    arrows: false,
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const slider = React.useRef(null);

  return (
    <div className={styles.DirectBuying}>
      <div>
        <h2>COMPRAS DIRECTAS:</h2>
        <h3>Pasos para la compra directa:</h3>
        <ul>
          <li><BrowserRouter><h4>1. </h4> Desde la sección<Link to='/Contact'>contáctenos</Link>de este sitio, Usted nos envía su consulta sobre cualquiera de nuestros productos</BrowserRouter></li>
          <li><h4>2. </h4> Dentro de las 48 horas hábiles posteriores, nosotros nos comunicamos con Usted a través de un email respondiendo a su consulta y enviándole nuestros datos de contacto telefónico</li>
          <li><h4>3. </h4> Usted nos contacta telefónicamente a fin de formalizar el pedido y precisar cotización final, datos para facturación, dirección para envío y modo de pago</li>
          <li><h4>4. </h4> Nosotros verificamos la acreditación de su pago y le enviamos una notificación por email</li>
          <li><h4>5. </h4> Dentro de las 24 horas hábiles de acreditado el pago, nosotros despachamos su pedido y le enviamos una notificación por email</li>
        </ul>
      </div>
        <div>
        <h2>PRODUCTOS DESTACADOS:</h2>
          <div className={styles.DivButtons}>
                <button className={styles.ButtonPrev} onClick={() => slider?.current?.slickPrev()}><FaArrowLeft/></button>
                <button className={styles.ButtonNext} onClick={() => slider?.current?.slickNext()}><FaArrowRight/></button>
          </div>
      </div>
      <Slider ref={slider} {...sliderSettings}>
          <div className={styles.slide}>
            <img src={ProductoUno} alt="Producto Uno"/>
            <p>u$s 36.54 + IVA + Gastos de envío<br/>(precio por unidad)</p>
          </div>
          <div className={styles.slide}>
            <img src={ProductoDos} alt="Producto Dos"/>
            <p>u$s 58.41 + IVA + Gastos de envío<br/>(precio unitario por conjunto de Aplicador + Dip Mizer)</p>
          </div>
        </Slider>
      </div>
  )
}

export default DirectBuying