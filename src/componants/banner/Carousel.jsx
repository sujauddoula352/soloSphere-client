import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bgImg1 from "../../assets/images/carousel1.jpg";
import bgImg2 from "../../assets/images/carousel2.jpg";
import bgImg3 from "../../assets/images/carousel3.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

export default function Carousel() {
  return (
    <div className="container px-6 py-10  mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgImg1}
            text="Get Your web Development Project Done in Minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg2}
            text="Get Your Graphics Design Project Done in Minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg3}
            text="Get Your Digital Marketing Project Done in Minutes"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
