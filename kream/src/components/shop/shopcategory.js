
import styles from "./shopcategory.module.css";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export const ShopCategory = ({ products, setProducts, convertPrice, search}) => {
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


  // const filterTitle = products.filter((p) => {
  //   return p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  // });


  return (
    <>

<input type="text" value={search} />


      <br /><br /><br />
      <div className={styles.content}>
        <h2 className={styles.contentName1}>여성 추천 컬렉션</h2>
        <h5 className={styles.contentName2}>WIPPING에서 추천하는 인기 상품</h5>
      </div><br />
      <main className={styles.flex_wrap}>
        {products.filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
        || item.provider.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        || item.category.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((product) => { //map을 이용하여 상품 갯수만큼 반복시키기
          return <Product key={`key-${product.id}`} product={product} convertPrice={convertPrice} />;
        })}
      </main>
    </>
  );
};

