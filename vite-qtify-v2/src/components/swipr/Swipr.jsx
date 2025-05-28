import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "../../components/card/Card";
import Right from "../../assets/right_nav.svg";
import Left from "../../assets/left_nav.svg";
import Styles from "./Swipr.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Swipr = ({ dta }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div
      style={{
        width: "100%",
        padding: "0 40px",
        backgroundColor: "#121212",
      }}
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={25}
        slidesPerView={7}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // This ensures the refs are available when Swiper initializes navigation
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {dta.map((ele) => (
          <SwiperSlide>
            <Card
              image={ele.image}
              follow={ele.follows}
              songType={ele.slug}
            ></Card>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide
      style={{
        backgroundColor: "#f0f0f0",
        height: "232px",
        width: "159px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Slide 1</h3>
    </SwiperSlide>
    <SwiperSlide
      style={{
        backgroundColor: "#e0e0e0",
        height: "232px",
        width: "159px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Slide 2</h3>
    </SwiperSlide>
    <SwiperSlide
      style={{
        backgroundColor: "#e0e0e0",
        height: "232px",
        width: "159px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Slide 3</h3>
    </SwiperSlide>

    <SwiperSlide
      style={{
        backgroundColor: "#e0e0e0",
        height: "232px",
        width: "159px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Slide 4</h3>
    </SwiperSlide>

    <SwiperSlide
      style={{
        backgroundColor: "#e0e0e0",
        height: "232px",
        width: "159px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Slide 5</h3>
    </SwiperSlide>

    <SwiperSlide
      style={{
        backgroundColor: "#e0e0e0",
        height: "232px",
        width: "159px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Slide 6</h3>
    </SwiperSlide>

    <SwiperSlide
      style={{
        backgroundColor: "#e0e0e0",
        height: "232px",
        width: "159px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Slide 7</h3>
    </SwiperSlide>

    <SwiperSlide
      style={{
        backgroundColor: "#e0e0e0",
        height: "232px",
        width: "159px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Slide 8</h3>
    </SwiperSlide> */}
        {/* Custom Navigation Elements */}
        <div ref={prevRef} className={Styles.customSwiperButtonPrev}>
          <img src={Left} alt="Previous" />
        </div>
        <div ref={nextRef} className={Styles.customSwiperButtonNext}>
          <img src={Right} alt="Next" />
        </div>
      </Swiper>
    </div>
  );
};

export default Swipr;
