import React from "react";
import styles from "../../styles/components/price.scss";

class Price extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside>
        <div className={styles.price__container}>
          <div className={styles.price__dialog}>
            <div className={styles.arrow_box} id="arrow-box">
              save 82%
            </div>
          </div>
          <div className={styles.price__currency} id="price__currency">
            $
          </div>
          <div className={styles.price__dollar} id="price__dollar">
            1
          </div>
          <div className={styles.price__cents} id="price__cents">
            45
          </div>
          <div className={styles.price__month} id="price__month">
            /mo
          </div>
        </div>
      </aside>
    );
  }
}

export default Price;
