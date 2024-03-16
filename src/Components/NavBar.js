import React, { useEffect, useState, useRef } from 'react';
import styles from './NavBar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from '../Img/logo.webp';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [color, setColor] = useState(false);
  const [NavBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const navRef = useRef(null);

  const ChangeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', ChangeColor);

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectDimension);

    windowDimension.width > 800 && setNavBarOpen(false);

    return () => {
      window.removeEventListener('resize', detectDimension);
    };
  }, [windowDimension]);

  const handleMenuToggle = () => {
    setNavBarOpen(!NavBarOpen);
    if (!NavBarOpen) {
      document.body.style.overflow = 'hidden';
      navRef.current.style.position = 'fixed';
      navRef.current.style.bottom = '0';
      navRef.current.style.width = '100%';
      navRef.current.style.zIndex = '1000';
    } else {
      document.body.style.overflow = 'auto';
      navRef.current.style.position = '';
      navRef.current.style.bottom = '';
      navRef.current.style.width = '';
      navRef.current.style.zIndex = '';
    }
  };

  const links = [
    {
      id: 1,
      link: 'AGRONOMÍA',
      url: '/Agronomía',
      external: false,
    },
    {
      id: 2,
      link: 'TAMBO-GANADERÍA',
      url: '/TamboGanadería',
      external: false,
    },
    {
      id: 3,
      link: 'CONTÁCTANOS',
      url: '/Contactos',
      external: false,
    },
  ];

  return (
    <div ref={navRef} className={`${styles.navBar} ${color ? styles.navBarScroll : ''} ${NavBarOpen ? styles.navOpen : ''}`}>
      {!NavBarOpen && (
        <Link to="/">
          <img className={styles.ImgLogo} src={Logo} alt="Logo Salto" />
        </Link>
      )}
      {!NavBarOpen && windowDimension.width < 800 ? (
        <AiOutlineMenu
          className={styles.MenuLogo}
          onClick={handleMenuToggle}
          size={25}
        />
      ) : (
        windowDimension.width < 800 && (
          <AiOutlineClose
            className={styles.CloseLogo}
            onClick={handleMenuToggle}
            size={25}
          />
        )
      )}
      {NavBarOpen && (
        <ul className={styles.LinksConteiner}>
          {links.map((x) => (
            <li key={x.link} className={styles.NavLink}>
              <a
                href={x.url}
                rel="noopener noreferrer"
                onClick={() => setNavBarOpen(false)}
              >
                {x.link === 'Tambo-Ganadería' ? 'TamboGanadería' : x.link}
              </a>
            </li>
          ))}
        </ul>
      )}
      {windowDimension.width > 800 && (
        <ul className={styles.LinksConteiner}>
          {links.map((x) => (
            <li key={x.link} className={styles.NavLink}>
              {x.external ? (
                <Link
                  to={x.url}
                  onClick={() => setNavBarOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {x.link}
                </Link>
              ) : (
                <Link to={x.url} onClick={() => setNavBarOpen(false)}>
                  {x.link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;






