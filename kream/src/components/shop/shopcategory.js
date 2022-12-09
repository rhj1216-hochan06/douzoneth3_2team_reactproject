
import styles from "./shopcategory.module.css";
import { Product } from "../products/product";
import { useEffect,useState } from "react";

export const ShopCategory = ({ products, setProducts, convertPrice, search}) => {
  


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

