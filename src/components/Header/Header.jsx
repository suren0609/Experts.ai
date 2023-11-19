import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/TopExperts.ai.png";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.headerLeft}>
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className={styles.headerRight}>
        <a href="#">How it works</a>
        <a href="#">Abous us</a>
        <a href="#">Services</a>
      </div>
    </div>
  );
};

export default Header;
