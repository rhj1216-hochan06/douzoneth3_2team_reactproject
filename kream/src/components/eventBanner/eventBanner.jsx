import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./eventBanner.module.css";

export const EventBanner = () => {
  return (
    <>
    <center>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper" >
      <SwiperSlide><img src="./images/event.png"/></SwiperSlide>
      <SwiperSlide><img src="./images/event5.png"/></SwiperSlide>
      <SwiperSlide><img src="./images/event6.png"/></SwiperSlide>
      <SwiperSlide><img src="./images/event7.png"/></SwiperSlide>
    </Swiper>
    </center>
    </>
  );
}