import { EventBanner } from "../components/eventBanner/eventBanner";
import { Link } from 'react-router-dom';
import styles from "../components/home1/Home.module.css";

const Home = () => {
  return (
    <>
      <EventBanner />

      <main className={styles.flex_wrap}>
        <div className={styles.product}>
          <div className={styles.sort}>
            <Link to="/event">
              <img className={styles.product_image} src=" /images/christmas.jpg" />
              <div className={styles.product_name}>크리스마스</div>
            </Link> <br />
          </div>
          <div className={styles.sort}>
            <Link to="/womenRecommend">
              <img className={styles.product_image} src=" /images/recomendwomen.jpg" />
              <div className={styles.product_name}>여성 추천</div>
            </Link><br />
          </div>
          <div className={styles.sort}>
            <Link to="/manRecommend">
              <img className={styles.product_image} src=" /images/recomendman.jpg" />
              <div className={styles.product_name}>남성 추천</div>
            </Link> <br />
          </div>
          <div className={styles.sort}>
            <Link to="/winter">
              <img className={styles.product_image} src=" /images/winter.jpg" />
              <div className={styles.product_name}>한파특가</div>
            </Link> <br />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
