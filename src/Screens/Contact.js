import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';
import FondoPantalla from '../Img/ContactoFondo.webp';
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMailUnread } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const redirigirAGoogleMaps = () => {
    window.location.href = "https://www.google.com/maps/place/SALTO+AGRO+S.S./@-31.3994458,-60.7497705,17z/data=!3m1!4b1!4m6!3m5!1s0x95b5131e7eb27e35:0x1f8b619bb0c77974!8m2!3d-31.3994458!4d-60.7471956!16s%2Fg%2F12m9l4_xd?entry=ttu";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const params = {
      name: formData.nombre,
      lastname: formData.apellido,
      email: formData.email,
      subject: formData.asunto,
      comments: formData.mensaje,
    };
  
    const serviceID = "service_vvylj4r";
    const templateID = "template_3ugyphh";
  
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          asunto: '',
          mensaje: '',
        });
  
        console.log(res);
        alert("¡Tu mensaje se envió exitosamente!");
      })
      .catch((err) => {
        console.error(err);
        alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
      });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    emailjs.init("1EJiaclxDCY3l0gZx");
  }, []);

  return (
    <div className={styles.Conteiner}>
      <div className={styles.Contact}>
        <img className={styles.ImgFondo} src={FondoPantalla} alt="Fondo de Pantalla" />
        <div className={styles.H2Contact}>
          <h2>CONTACTO</h2>
        </div>
        <div className={styles.WavyTransitions}>
          <svg className={styles.WavySvg} viewBox="0 0 500 150" preserveAspectRatio="none">
            <path className={styles.WavyPath} d="M-0.00,49.88 C150.00,149.67 271.39,-49.88 500.00,49.88 L500.00,150.00 L-0.00,150.00 Z"></path>
          </svg>
        </div>
      </div>

      <div className={styles.TCU}>
        <div className={styles.ContactItem}>
          <FiPhoneCall/>
          <div className={styles.ContactText}>
            <h3>Teléfono</h3>
            <p>0342 490-6182</p>
          </div>
        </div>
    
        <div className={styles.ContactItem}>
          <IoMdMailUnread />
          <div className={styles.ContactText}>
            <h3>Consultas</h3>
            <p>Info@gmail.com</p>
          </div>
        </div>
    
        <div className={styles.ContactItem} onClick={redirigirAGoogleMaps}>
          <BiWorld />
          <div className={styles.ContactText} >
            <h3>Ubicación</h3>
            <p>Ruta 11 y San Martin</p>
          </div>
        </div>
      </div>

      <div className={styles.Conteiner_2}>
        <div className={styles.Pasos_Compra}>
          <h2>Pasos para la compra directa:</h2>
          <p>Usted nos envía su consulta sobre cualquiera de nuestros productos.</p>
          <p>Dentro de las 48 horas hábiles posteriores, nosotros nos comunicamos con Usted a través de un email o telefónicamente respondiendo a su consulta.</p>
          <p>Usted nos contacta telefónicamente a fin de formalizar el pedido y precisar cotización final, datos para facturación, dirección para envío y modo de pago.</p>
          <p>Nosotros verificamos la acreditación de su pago y le enviamos una notificación por email.</p>
          <p>Dentro de las 24 horas hábiles de acreditado el pago, nosotros despachamos su pedido y le enviamos una notificación por email.</p>
        </div>
        <div>
        <form className={styles.FormularioContacto} onSubmit={handleSubmit} action="">
          <ul className={styles.UlContacto}>
            <div className={styles.DivNA}>
              <li>
                <label htmlFor="nombre" className={styles.LabelC}>Nombre</label>
                <input
                  className={styles.InputNA}
                  type="text"
                  id="nombre"
                  name="nombre"
                  autoComplete="given-name"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                />
              </li>
              <li>
                <label htmlFor="apellido" className={styles.LabelC}>Apellido</label>
                <input
                  className={styles.InputNA}
                  type="text"
                  id="apellido"
                  name="apellido"
                  autoComplete="family-name"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  required
                />
              </li>
            </div>
            <div className={styles.DivCA}>
              <li>
                <label htmlFor="email" className={styles.LabelC}>Correo electrónico</label>
                <input
                  className={styles.InputCA}
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </li>
              <li>
                <label htmlFor="asunto" className={styles.LabelC}>Asunto</label>
                <input
                  className={styles.InputCA}
                  type="text"
                  id="asunto"
                  name="asunto"
                  autoComplete="subject"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  required
                />
              </li>
            </div>
            <div className={styles.DivMen}>
              <li className={styles.LiMensaje}>
                <label htmlFor="mensaje" className={styles.LabelC}>Mensaje</label>
                <textarea
                  className={styles.TextAreaMensaje}
                  type="text"
                  id="mensaje"
                  name="mensaje"
                  autoComplete="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                ></textarea>
              </li>
              <button className={styles.ButtonContacto} type="submit">Enviar</button>
            </div>
          </ul>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
