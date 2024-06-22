import { useEffect, useState } from "react";
import TitelSubtitle from "../../shared/components/titleSubtitle/TitelSubtitle";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from '../../../assets/quote-left 1.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="my-20">
      <TitelSubtitle title="testimonials" subTitle="What Our Clients Say" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((item) => (
          <SwiperSlide className="p-32 text-center space-y-6" key={item._id}>
            <img className="mx-auto" src={img} alt="" />
            <p>{item.details}</p>
            <h4 className="text-[#CD9003] text-[32px]">{item.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
