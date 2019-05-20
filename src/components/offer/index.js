import React from "react";
import styles from "../../styles/components/offer.scss";

class Offer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endDate: "January, 1, 2020",
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.state.endDate);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.endDate), 1000);
  }

  leading0(num) {
    return num < 10 ? "0" + num : num;
  }

  getTimeUntil(endDate) {
    const time = Date.parse(endDate) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
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
            <div className="countdown__text-numbers">
              {this.leading0(this.state.days)}
            </div>
            <div className="countdown__text-words">days</div>
          </div>
          <div className={styles.countdown__text}>
            <div className="countdown__text-numbers">
              {this.leading0(this.state.hours)}
            </div>
            <div className="countdown__text-words">hours</div>
          </div>
          <div className={styles.countdown__text}>
            <div className="countdown__text-numbers">
              {this.leading0(this.state.minutes)}
            </div>
            <div className="countdown__text-words">minutes</div>
          </div>
          <div className={styles.countdown__text}>
            <div className="countdown__text-numbers">
              {this.leading0(this.state.seconds)}
            </div>
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
