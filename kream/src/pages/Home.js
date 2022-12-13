import { NewProducts } from "../components/products/NewProducts";
import { EventBanner } from "../components/eventBanner/eventBanner";
import { Link } from 'react-router-dom';
import styles from "../components/home1/Home.module.css";


export const Home = ({ convertPrice, setProducts, products }) => {
  return (
    <>
      <EventBanner />
      <main className={styles.flex_wrap}>
        <div className={styles.product}>
          <div className={styles.sort}>
            <Link to="/christmas">
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
            </Link>
          </div>
        </div>
      </main><br/>
      <div className={styles.line}></div>
      <main className={styles.flex_wrap}>
        <div>
          <div className={styles.newProducts}>
            <h4 className={styles.newIn}>New In</h4>
            <h6 className={styles.ment}>신규 등록 상품</h6>
          </div>
          <NewProducts
            convertPrice={convertPrice}
            setProducts={setProducts}
            products={products}
          />
        </div>
      </main>
    </>

  );
};
