import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import banner1 from "../../assets/Images/Banner/1.jpg";
import banner2 from "../../assets/Images/Banner/2.jpg";
import banner3 from "../../assets/Images/Banner/3.jpg";
import banner4 from "../../assets/Images/Banner/4.jpg";

const Banner = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img src={banner1} alt="" className="h-[38rem] w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt="" className="h-[38rem] w-full"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt="" className="h-[38rem] w-full"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner4} alt="" className="h-[38rem] w-full"/>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
