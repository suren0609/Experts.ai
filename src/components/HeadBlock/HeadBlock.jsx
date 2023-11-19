import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../assets/image 1.png";
import styles from "./HeadBlock.module.scss";

const HeadBlock = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const sliderItems = [
    {
      name: "Jane Doe",
      proffession: "JavaScript Developer",
      image: "image 1.png",
    },
    {
      name: "Sam Smith",
      proffession: "Singer",
      image: "image 1.png",
    },
  ];

  return (
    <div className={styles.HeadBlock}>
      <div className={styles.MakeBright}>
        <h2>Make bright ideas happen</h2>
        <p>Brief description of the platform</p>
        <div className={styles.btns}>
          <button className={styles.browse}>Browse Experts</button>
          <button className={styles.Register}>Register as Expert</button>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.sliderHeader}>
          <p>AI expert</p>
          <div className={styles.controls}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <circle cx="8.16201" cy="8.78835" r="8.01296" fill="#00F0FF" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <circle cx="8.21383" cy="8.78835" r="8.01296" fill="#7041EA" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M16.1339 8.78835C16.1339 13.2138 12.5464 16.8013 8.12096 16.8013C3.69553 16.8013 0.108002 13.2138 0.108002 8.78835C0.108002 4.36292 3.69553 0.775391 8.12096 0.775391C12.5464 0.775391 16.1339 4.36292 16.1339 8.78835Z"
                fill="#FF2DF7"
              />
            </svg>
          </div>
        </div>
        <div className={styles.sliderBody}>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            autoPlaySpeed={3000}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            {sliderItems.map((item, index) => (
              <div className={styles.card} key={index}>
                <img src={image1} alt="" />
                <h3>{item.name}</h3>
                <p>{item.proffession}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HeadBlock;
