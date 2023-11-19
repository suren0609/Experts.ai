import React from "react";
import styles from "./HowItWorks.module.scss";

const HowItWorks = () => {
  return (
    <div className={styles.HowItWorks}>
      <h2>How it Works</h2>
      <div className={styles.oneTwoThree}>
        <div className={styles.numBlock}>
          <div className={styles.numBlockTop}>
            <h1>1</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                fill="#7041EA"
              />
            </svg>
          </div>
          <h4>Target Identification and Prioritization</h4>
          <p>
            Nightingale's AI algorithms analyze vast amounts of biological and
            genetic data to identify.
          </p>
        </div>
        <div className={styles.numBlock}>
          <div className={styles.numBlockTop}>
            <h1>2</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                fill="#00F0FF"
              />
            </svg>
          </div>
          <h4>Target Identification and Prioritization</h4>
          <p>
            Nightingale's AI algorithms analyze vast amounts of biological and
            genetic data to identify.
          </p>
        </div>
        <div className={styles.numBlock}>
          <div className={styles.numBlockTop}>
            <h1>3</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                fill="#FF2DF7"
              />
            </svg>
          </div>
          <h4>Target Identification and Prioritization</h4>
          <p>
            Nightingale's AI algorithms analyze vast amounts of biological and
            genetic data to identify.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
