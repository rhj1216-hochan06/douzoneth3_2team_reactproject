import { EventBanner } from "../components/eventBanner/eventBanner";
import { Link } from 'react-router-dom';
import styles from "../components/home1/Home.module.css";

const Home = () => {
  return (
    <>
      <EventBanner />

      <main className={styles.flex_wrap}>
        <div className={styles.product}>
          <Link to="/"> 홈페이지</Link><br />

          <Link to="/womenRecommend">
            <img className={styles.product_image} src=" /images/recomendwoman.jpg" />
            <div className={styles.product_name}> 여성 추천</div>
          </Link><br />
          <Link to="/manRecommend">
            <img className={styles.product_image} src=" /images/recomendman.jpg" />
            <div className={styles.product_name}> 남성 추천</div>
          </Link> <br />
          <Link to="/"> 이벤트 </Link><br />
          <Link to="/products"> 전체 카테고리 목록 보기 </Link><br />
          <Link to="/main/cloth"> 카테고리 (의류) </Link><br />
          <Link to="/main/accessorie"> 카테고리 (패션잡화) </Link><br />
          <Link to="/main/tech"> 카테고리 (테크) </Link><br />
          <Link to="/main/life"> 카테고리 (라이프) </Link><br />
          <Link to="/main"> 전체 카테고리 </Link><br />
        </div>
      </main>
    </>
  );
};

export default Home;
