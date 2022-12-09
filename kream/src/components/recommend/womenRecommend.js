//WomenRecommend.js
import styles from "./recommend.module.css";
import { Link } from "react-router-dom";

export const WomenRecommend = ({ products, setProducts, convertPrice }) => {
  const Product = ({ product, convertPrice }) => {
    return (
      <div className={styles.product}>
        <Link to={`/products/${product.id}`}>
          <div className={styles.product_image}>
            <img src={product.image} alt="product" />
          </div>
        </Link>
        <div className={styles.store}>
          <span>{product.provider}</span>
        </div>

        <div className={styles.product_name}>
          <span>{product.name}</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>{convertPrice(product.price)}</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>
    );
  };
  return (
    <>
      <br /><br /><br />
      <div className={styles.content}>
        <h2 className={styles.contentName1}>여성 추천 컬렉션</h2>
        <h5 className={styles.contentName2}>WIPPING에서 추천하는 인기 상품</h5>
      </div><br />
      <main className={styles.flex_wrap}>
        {products.filter(item => item.gender === 2).map((product) => { //map을 이용하여 상품 갯수만큼 반복시키기
          return <Product key={`key-${product.id}`} product={product} convertPrice={convertPrice} />;
        })}
      </main>
    </>
  );
};