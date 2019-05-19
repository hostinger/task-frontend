import React from "react";
import styles from "../../styles/components/offer.scss";

class Offer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h1>
          <span>New Year Offer</span>
          <br />
          <span className="highlight">82% OFF </span>
          <span>Web Hosting</span>
        </h1>
        <div className={styles.countdown}>
          <div className="countdown__icons">
            <i className="fas fa-caret-right" />
          </div>
          <div className={styles.countdown__text}>
            <div className="countdown__text-numbers">00</div>
            <div className="countdown__text-words">days</div>
          </div>
          <div className={styles.countdown__text}>
            <div className="countdown__text-numbers">00</div>
            <div className="countdown__text-words">hours</div>
          </div>
          <div className={styles.countdown__text}>
            <div className="countdown__text-numbers">00</div>
            <div className="countdown__text-words">minutes</div>
          </div>
          <div className={styles.countdown__text}>
            <div className="countdown__text-numbers">00</div>
            <div className="countdown__text-words">seconds</div>
          </div>
          <div className="countdown__icons">
            <i className="fas fa-caret-left" />
          </div>
        </div>
        <button className={styles.button__getstarted} id="button__getstarted">
          get started now
        </button>
      </section>
    );
  }
}

export default Offer;
