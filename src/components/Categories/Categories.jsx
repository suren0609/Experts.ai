import React from "react";
import spotify from "../../assets/spotify.png";
import styles from "./Categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.Categories}>
      <h1>Browse expert by category</h1>
      <div className={styles.list}>
        <div className={styles.category}>
          <img src={spotify} alt="" />
          <div className={styles.desc}>
            <h3>AI Services</h3>
            <p>
              Nightingale's AI algorithms analyze vast amounts of biological and
              genetic data to identify.
            </p>
          </div>
          <p>Explore more</p>
        </div>
        <div className={styles.category}>
          <img src={spotify} alt="" />
          <div className={styles.desc}>
            <h3>AI Services</h3>
            <p>
              Nightingale's AI algorithms analyze vast amounts of biological and
              genetic data to identify.
            </p>
          </div>
          <p>Explore more</p>
        </div>
        <div className={styles.category}>
          <img src={spotify} alt="" />
          <div className={styles.desc}>
            <h3>AI Services</h3>
            <p>
              Nightingale's AI algorithms analyze vast amounts of biological and
              genetic data to identify.
            </p>
          </div>
          <p>Explore more</p>
        </div>
        <div className={styles.category}>
          <img src={spotify} alt="" />
          <div className={styles.desc}>
            <h3>AI Services</h3>
            <p>
              Nightingale's AI algorithms analyze vast amounts of biological and
              genetic data to identify.
            </p>
          </div>
          <p>Explore more</p>
        </div>
        <div className={styles.category}>
          <img src={spotify} alt="" />
          <div className={styles.desc}>
            <h3>AI Services</h3>
            <p>
              Nightingale's AI algorithms analyze vast amounts of biological and
              genetic data to identify.
            </p>
          </div>
          <p>Explore more</p>
        </div>
        <div className={styles.category}>
          <img src={spotify} alt="" />
          <div className={styles.desc}>
            <h3>AI Services</h3>
            <p>
              Nightingale's AI algorithms analyze vast amounts of biological and
              genetic data to identify.
            </p>
          </div>
          <p>Explore more</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
