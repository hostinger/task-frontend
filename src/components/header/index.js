import React from "react";
import styles from "../../styles/components/header.scss";

const Header = () => (
  <header className="page-header">
    <div className="container">
      <div className={styles.nav_container}>
        <nav>
          <input
            type="checkbox"
            id="nav-toggle"
            className={styles.nav_toggle}
          />
          <label htmlFor="nav-toggle" className={styles.burger_menu}>
            <i className="fas fa-bars" />
          </label>
          <a className={styles.logo}>
            <img src="../../assets/logo.svg" />
          </a>
          <div className={styles.menu}>
            <a>Web Hosting</a>
            <a>Cloud Hosting</a>
            <a>VPS Hosting</a>
            <a>Domain Checker</a>
            <a>Website Builder</a>
          </div>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
