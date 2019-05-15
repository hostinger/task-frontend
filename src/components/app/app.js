import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";

import styles from "./app.scss";
import "../../index.scss";

const Image = require("../../../assets/background.jpg");

const Style = {
  backgroundImage: `url(${Image})`,
  backgroundSize: "cover"
};

class App extends Component {
  render() {
    return (
      <div className={styles.container__background} style={Style}>
        <div className={styles.container__content}>
          <Header />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
