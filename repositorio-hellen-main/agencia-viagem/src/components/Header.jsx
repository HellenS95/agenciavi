import styles from "./Header.module.css"
import logo from "../imagens/logoagencia.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
  <nav className={`navbar navbar-expand-lg sticky-top p-4 ${styles.containernav}`} id="navContainer">
    <div>
      <a href="#" className="navbar-brand">
        <img className={styles.logoAgencia} src={logo} alt="Agencia Uai" />
      </a>
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className={`collapse navbar-collapse ${styles.menu}`} id="navbarNav">
      <ul className={`navbar-nav ${styles.containermenu}`} >
        <li className={`nav-item ${styles.linkmenu}`}>
          <Link to="/"> HOME </Link>
        </li>
        <li className={`nav-item ${styles.linkmenu}`}>
        <Link to="/destinos"> DESTINOS </Link>
        </li>
        <li className={`nav-item ${styles.linkmenu}`}>
        <Link to="/promocoes"> PROMOCOES </Link>
        </li>
        <li className={`nav-item ${styles.login}`}>
        <Link to="/contato"> FALE CONOSCO </Link>

        </li>
      </ul>
    </div>
  </nav>
</header>

  );
};

export default Header;
