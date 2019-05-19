import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
import Offer from "../offer";

import styles from "./app.scss";
// import style from "../../index.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.container__background}>
        <div className={styles.container__content}>
          <Header />
          <Offer />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
