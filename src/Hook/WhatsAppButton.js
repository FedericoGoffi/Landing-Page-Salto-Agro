import React, { useState, useEffect } from 'react';
import styles from './WhatsAppButton.module.css';
import WhatsAppIcon from '../Img/WhatsAppIcon.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhatsAppButton = () => {

useEffect(() => {
        AOS.init();
    }, []);

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showButton = scrollY > 90;

  return (
    showButton && (
      <div className={styles.whatsapp_button} data-aos="fade-up">
        <a href="https://wa.me/+5493496504081" rel="noreferrer" target="_blank">
          <img src={WhatsAppIcon} alt="WhatsApp" />
        </a>
      </div>
    )
  );
};

export default WhatsAppButton;