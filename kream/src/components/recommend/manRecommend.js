//manRecommend.js
import { Link } from "react-router-dom";
import styles from "./recommend.module.css";
import { Product } from "../products/product";

export const manRecommend = ({ products, convertPrice }) => {

  return (
    <>
      <div className={styles.filter}>
        <p>정렬기준 1</p>
        <p>정렬기준 2</p>
        <p>정렬기준 3</p>
      </div>
      <main>
        {products.map((product) => {
          return <Product key={`key-${product.id}`} product={product} convertPrice={convertPrice} />;
        })}
      </main>
    </>
  );
};