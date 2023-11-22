import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./Resedensices.css";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
const Resdensices = () => {
  return (
    <section className="r-wrapper" id="residencies">
      <div className="innerWidth paddings r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Great Choices</span>
          <span className="primaryText">Famous Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />          
                <span className="secondaryText" r-price>
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>            
            </SwiperSlide>            
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Resdensices;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
