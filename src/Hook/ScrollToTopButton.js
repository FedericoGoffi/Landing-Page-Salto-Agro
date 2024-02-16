import React, {useEffect} from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styles from './ScrollToTopButton.module.css';
import { FaArrowUp } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollToTopButton = ({ scrollY }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  const showButton = scrollY > 90;

  return (
    showButton && (
      <button data-aos="fade-up" onClick={handleScrollToTop} className={styles.ScrollTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <FaArrowUp size={25} color='rgb(250, 197, 3)'/>
      </button>
    )
  );
};

export default ScrollToTopButton;