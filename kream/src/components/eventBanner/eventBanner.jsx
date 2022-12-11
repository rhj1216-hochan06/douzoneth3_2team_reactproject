import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./eventBanner.module.css";
import { Link } from 'react-router-dom';
export const EventBanner = () => {
  return (
    <>
    <center>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper" >
      <SwiperSlide><Link to="/products"> <img src="./images/event.png"/></Link></SwiperSlide>
      <SwiperSlide><Link to="/products"> <img src="./images/event5.png"/></Link></SwiperSlide>
      <SwiperSlide><Link to="/products"> <img src="./images/event6.png"/></Link></SwiperSlide>
      <SwiperSlide><Link to="/products"> <img src="./images/event7.png"/></Link></SwiperSlide>
    </Swiper>
    </center>
    </>
  );
}