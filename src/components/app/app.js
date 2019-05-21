import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
import Offer from "../offer";
import Price from "../price";

import styles from "./app.scss";
import "../../index.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.container__background}>
        <div className={styles.container__darken}>
          <div className={styles.container__content}>
            <div className={styles.component_header}>
              <Header />
            </div>
            <div className={styles.component_offer}>
              <Offer />
            </div>
            <div className={styles.component_price}>
              <Price />
            </div>
            <div className={styles.component_footer}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
