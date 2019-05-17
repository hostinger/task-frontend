import React from "react";
import styles from "../../styles/components/header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="page-header">
        <div className="container">
          <div className={styles.topnav} id={styles.myTopnav}>
            <a>
              <img className={styles.logo} src="../../assets/logo.svg" />
            </a>
            <div>
              <a>Web Hosting</a>
              <a>Cloud Hosting</a>
              <a>VPS Hosting</a>
              <a>Domain Checker</a>
              <a>Website Builder</a>
            </div>
            <a className={styles.icon}>
              <i className="fa fa-bars" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
