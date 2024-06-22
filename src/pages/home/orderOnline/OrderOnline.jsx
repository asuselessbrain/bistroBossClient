import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

import Heading from "../../../sharedComponent/headingAndSubheading/Heading";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const OrderOnline = () => {
  return (
    <div className="mb-[130px]">
      <Heading title="ORDER ONLINE" subtitle="---From 11:00am to 10:00pm---" />
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <p className="uppercase text-[32px] text-red-600 -mt-16 text-center">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <p className="uppercase text-[32px] text-red-600 -mt-16 text-center">
            pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <p className="uppercase text-[32px] text-red-600 -mt-16 text-center">
            Soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <p className="uppercase text-[32px] text-red-600 -mt-16 text-center">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <p className="uppercase text-[32px] text-red-600 -mt-16 text-center">
            Salads
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderOnline;
