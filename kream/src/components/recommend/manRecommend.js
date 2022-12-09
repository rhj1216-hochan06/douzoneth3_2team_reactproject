//ManRecommend.js
import styles from "./recommend.module.css";
import { Product } from "../products/product";
import { useEffect } from "react";

export const ManRecommend = ({ products, setProducts, convertPrice }) => {

  return (
    <>
      <br /><br /><br />
      <div className={styles.content}>
        <h2 className={styles.contentName1}>남성 추천 컬렉션</h2>
        <h5 className={styles.contentName2}>WIPPING에서 추천하는 인기 상품</h5>
      </div><br />
      <main className={styles.flex_wrap}>
        {products.filter(item => item.gender === 1).map((product) => { //map을 이용하여 상품 갯수만큼 반복시키기
            return <Product key={`key-${product.id}`} product={product} convertPrice={convertPrice} />;
          })}
      </main>
    </>
  );
};