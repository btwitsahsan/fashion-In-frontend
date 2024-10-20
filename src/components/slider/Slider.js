import React, { useEffect, useState, useRef } from "react";
import styles from "./Slider.module.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const autoScroll = true;
  const slideInterval = useRef(null); // Use useRef to persist the interval
  const intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0); // Set initial slide on mount
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval.current = setInterval(nextSlide, intervalTime);
      };
      auto();
    }

    return () => clearInterval(slideInterval.current); // Cleanup the interval on unmount
    // eslint-disable-next-line
  }, [currentSlide, intervalTime, autoScroll]);

  return (
    <div className={styles.slider}>
      <AiOutlineArrowLeft
        className={`${styles.arrow} ${styles.prev}`}
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className={`${styles.arrow} ${styles.next}`}
        onClick={nextSlide}
      />
      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={
              index === currentSlide
                ? `${styles.slide} ${styles.current}`
                : `${styles.slide}`
            }
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
                <div className={styles.content}>
                  <span className={styles.span1}></span>
                  <span className={styles.span2}></span>
                  <span className={styles.span3}></span>
                  <span className={styles.span4}></span>
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <button className="anmoBTN2">Shop Now</button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
