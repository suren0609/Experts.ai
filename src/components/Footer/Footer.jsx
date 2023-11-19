import React from "react";
import logo from "../../assets/TopExperts.ai.png";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Header}>
        <div className={styles.headerLeft}>
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className={styles.headerRight}>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Help</a>
        </div>
      </div>
      <div className={styles.media}>
        <div className={styles.left}>
          <p>
            <i className="bx bxl-facebook-circle"></i>
          </p>
          <p>
            <i className="bx bxl-instagram"></i>
          </p>
          <p>
            <i className="bx bxl-linkedin-square"></i>
          </p>
        </div>
        <p>Terms of Use & Privacy Policy</p>
      </div>
      <hr />
      <p>© 2022  Experts | All rights reserved.</p>
    </div>
  );
};

export default Footer;
