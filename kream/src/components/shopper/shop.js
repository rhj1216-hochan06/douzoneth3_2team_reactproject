//WomenRecommend.js
import styles from "./shop.css";
import { Product } from "../products/product";

export const Shop = ({ products, setProducts, convertPrice }) => {

  return (
    <>
      <br /><br /><br />
      <div className={styles.content}>
        <h2 className={styles.contentName1}>shop 상품보기</h2>
        <h5 className={styles.contentName2}>WHIPPING에서 추천하는 인기 상품</h5>
      </div><br />
      <main className={styles.flex_wrap}>
        {products.map((product) => { //map을 이용하여 상품 갯수만큼 반복시키기
          return <Product key={`key-${product.id}`} product={product} convertPrice={convertPrice} />;
        })}
      </main>
    </>
  );
};