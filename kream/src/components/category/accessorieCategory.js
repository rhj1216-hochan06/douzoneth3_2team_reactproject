//ManRecommend.js
import styles from "./category.module.css";
import { Product } from "../products/product";

export const AccessorieCategory = ({ products, setProducts, convertPrice }) => {

  return (
    <>
      <br /><br /><br />
      <div className={styles.content}>
        <h2 className={styles.contentName1}>패션잡화 카테고리</h2>
        <h5 className={styles.contentName2}>WIPPING에서 추천하는 인기 상품</h5>
      </div><br />
      <main className={styles.flex_wrap}>
        {products.filter(item => item.category === "패션잡화").map((product) => { //map을 이용하여 상품 갯수만큼 반복시키기
            return <Product key={`key-${product.id}`} product={product} convertPrice={convertPrice} />;
          })}
      </main>
    </>
  );
};