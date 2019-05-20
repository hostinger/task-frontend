import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
import Offer from "../offer";
import Price from "../price";

import styles from "./app.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.container__background}>
        <div className={styles.container__darken}>
          <div className={styles.container__content}>
            <Header />
            <Offer />
            <Price />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
