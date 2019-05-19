import React from "react";
import styles from "../../styles/components/footer.scss";

const Footer = () => (
  <footer className="page-footer">
    {/* <div className="container"> */}
    <div className={styles.contentFooter}>
      <a className={styles.menuItem1}>
        <i className="fas fa-check" />
        <span> Guaranteed 99.9% Uptime</span>
      </a>
      <a className={styles.menuItem2}>
        <i className="fas fa-check" />
        <span> Superior Speed Performance</span>
      </a>
      <a className={styles.menuItem3}>
        <i className="fas fa-check" />
        <span> 24/7 Support Chat</span>
      </a>
      <a className={styles.menuItem4}>
        <i className="fas fa-check" />
        <span> 30-Day Money-Back Guarantee</span>
      </a>
      {/* </div> */}
    </div>
  </footer>
);

export default Footer;
