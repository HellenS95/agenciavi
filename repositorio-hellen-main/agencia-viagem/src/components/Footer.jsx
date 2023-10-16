import styles from "./Footer.module.css"
import logo from "../imagens/logoagencia.png"

const Footer = () => {
    return (
    <section className={`${styles.footer}`}>  
    <img className={`${styles.logoAgencia}`} src={logo} />
    <h2 > Desenvolvido por Hellen </h2>
    </section>
   )
}

export default Footer;