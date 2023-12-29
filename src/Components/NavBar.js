import React, { useEffect, useState } from 'react'
import styles from './NavBar.module.css';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Logo from '../Img/Logo.png';

const NavBar = () => {

  const[NavBarOpen, setNavBarOpen] = useState(false);
  const[windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
  })

  }

  useEffect(() => {
    window.addEventListener('resize', detectDimension)
    windowDimension.width > 800 && setNavBarOpen(false)
    return () => {
    window.removeEventListener('resize', detectDimension)
    }
  },[windowDimension])

  const links=[
    {
      id: 1,
      link: "Quiénes somos",
    },
    {
      id: 2,
      link: "Agronomía",
    },
    {
      id: 3,
      link: "Tambo-Ganadería",
    },
    {
      id: 4,
      link: "Compras directas",
    },
    {
      id: 5,
      link: "Local comercial",
    },
    {
      id: 6,
      link: "Contáctanos"
    },
  ]
  
  return (
    <div className={!NavBarOpen === true ? styles.NavBar : styles.NavOpen}>
      {!NavBarOpen && <img className={styles.ImgLogo} src={Logo} alt="Logo Salto"/>}
      {!NavBarOpen && windowDimension.width < 800 ? <AiOutlineMenu className={styles.MenuLogo} onClick={() => setNavBarOpen(!NavBarOpen)} size={25}/> : windowDimension.width < 800 && <AiOutlineClose className={styles.CloseLogo} onClick={() => setNavBarOpen(!NavBarOpen)} size={25}/>}
      {NavBarOpen && (
      <ul className={styles.LinksConteiner}>
        {links.map((x) => (
          <li key={x.link} className={styles.NavLink}>
            <a href={x.link} onClick={() => setNavBarOpen(false)} smooth="true" duration={500}>
              {x.link === "Tambo-Ganadería" ? "Tambo-Ganadería" : x.link}
            </a>
          </li>
        ))}
      </ul>
      )}
      {
        windowDimension.width > 800 && <ul className={styles.LinksConteiner}>
        {links.map((x) => (
          <li key={x.link} className={styles.NavLink}>
            <a href={x.link} onClick={() => setNavBarOpen(false)} smooth="true" duration={500}>
              {x.link === "Tambo-Ganadería" ? "Tambo-Ganadería" : x.link}
            </a>
          </li>
        ))}
      </ul>
      }
    </div>
  )
}

export default NavBar