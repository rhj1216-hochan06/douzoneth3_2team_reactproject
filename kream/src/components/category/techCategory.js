//ManRecommend.js
import styles from "./category.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export const TechCategory = ({ products, setProducts, convertPrice }) => {
   //---------------------------------------------------DAO 시작
   const [state, setState] = useState([]);

   fetch("/api/techCategory", {
     method: "get",
     headers: {
       "content-type": "application/json",
       Accept: "application / json",
     },
   })
     .then((res) => res.json())
     .then(json => setState(json));
   //--------------------------------------------------------끝
  return (
    <>
      <br /><br /><br />
      <div className={styles.content}>
        <h2 className={styles.contentName1}>테크 카테고리</h2>
        <h5 className={styles.contentName2}>WIPPING에서 추천하는 인기 상품</h5>
      </div><br />
      <main className={styles.flex_wrap}>
        {state.products && state.products.map((product) => { //map을 이용하여 상품 갯수만큼 반복시키기
          if (!state.products) return 'no data';
          //  return <Product key={`key-${product.id}`} product={product} convertPrice={convertPrice} />;
          return <div className={styles.product}>

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
            </div><br/><br/><br/>
          </div>
        })}
      </main>
    </>
  );
};
