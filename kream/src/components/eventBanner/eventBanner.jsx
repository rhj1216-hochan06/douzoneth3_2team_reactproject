import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles  from "./eventBanner.module.css";
import { Link } from 'react-router-dom';

export const EventBanner = () => {
  return (
    <>
    <center>
    <Swiper navigation={true} modules={[Navigation]} className={styles.mySwiper} >
      <SwiperSlide><Link to="/products"> <img className={styles.img} src="./images/event.png"/></Link></SwiperSlide>
      <SwiperSlide><Link to="/products"> <img className={styles.img} src="./images/event5.png"/></Link></SwiperSlide>
      <SwiperSlide><Link to="/products"> <img className={styles.img} src="./images/event6.png"/></Link></SwiperSlide>
      <SwiperSlide><Link to="/products"> <img className={styles.img} src="./images/event7.png"/></Link></SwiperSlide>
    </Swiper>
    </center>
    </>
  );
}