import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from '../Img/logo.webp';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [NavBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isScrolled, setIsScrolled] = useState(false);

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('resize', detectDimension);
    window.addEventListener('scroll', handleScroll);

    windowDimension.width > 800 && setNavBarOpen(false);

    return () => {
      window.removeEventListener('resize', detectDimension);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [windowDimension]);

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
    <div
      className={`${styles.NavBar} ${isScrolled ? styles.Scrolled : ''} ${
        NavBarOpen ? styles.NavOpen : ''
      }`}
    >
      {!NavBarOpen && (
        <Link to="/">
          <img className={styles.ImgLogo} src={Logo} alt="Logo Salto" />
        </Link>
      )}
      {!NavBarOpen && windowDimension.width < 800 ? (
        <AiOutlineMenu
          className={styles.MenuLogo}
          onClick={() => setNavBarOpen(!NavBarOpen)}
          size={25}
        />
      ) : (
        windowDimension.width < 800 && (
          <AiOutlineClose
            className={styles.CloseLogo}
            onClick={() => setNavBarOpen(!NavBarOpen)}
            size={25}
          />
        )
      )}
      {NavBarOpen && (
        <ul className={styles.LinksConteiner}>
          {links.map((x) => (
            <li key={x.link} className={styles.NavLink}>
              <a
                href={x.link === 'Contáctanos' ? '/contact' : `/${x.link.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setNavBarOpen(false)}
              >
                {x.link === 'TamboGanadería' ? 'TamboGanadería' : x.link}
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
                <a
                  href={x.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setNavBarOpen(false)}
                >
                  {x.link}
                </a>
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

