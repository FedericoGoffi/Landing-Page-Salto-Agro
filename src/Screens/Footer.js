import React from 'react'
import Logo from '../Img/logo.webp';
import styles from './Footer.module.css'

const Footer = () => {

  return (
    <div>
        <div className={styles.Container}>
            <div className={styles.IP}>
                <img className={styles.ImgLogo} src={Logo} alt="Logo Salto Agro" />
                <p>Santa Fe | Gdor. Candioti | Ruta 11 y San Martin</p>
            </div>
            <div className={styles.Container_2}>
                <div  className={styles.TM}>
                    <div>
                        <h2>TELÉFONO:</h2>
                        <p>0342 490-6182</p>
                    </div>
                    <div>
                        <h2>MAIL:</h2>
                        <p>panchocandioti<br/>@gmail.com</p>
                    </div>
                </div>
                <div className={styles.Staff}>
                    <h2>STAFF:</h2>
                    <ul>
                        <li>Ing. Agr. Francisco Candioti</li>
                        <li>Ing. Agr. Germán A. Goffi</li>
                        <li>Ing. Agr. Alejandro E. Rosset</li>
                        <li>Med. Vet. Gabriel J. Gomila</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.FooterFinal}>
            <p>© SALTO AGRO 2024</p>
        </div>
    </div>
  )
}

export default Footer