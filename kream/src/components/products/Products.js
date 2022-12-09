//products.js
import styles from "./Products.module.css";
// import { Product } from "./product";
import { useSelector, useDispatch } from 'react-redux';
import { up } from '../../store/counterSlice';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const Products = ({ products, setProducts, convertPrice }) => {
  const [scroll, setScroll] = useState(false);
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
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 5000px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 3000) {
      setScroll(true);
      console.log(scroll)
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }

  };


  const sortProduct = (type) => {
    if (type === "recent") {
      const newProduct = [...products];
      newProduct.sort((a, b) => a.id - b.id);
      setProducts(newProduct);
    } else if (type === "row") {
      const newProduct = [...products];
      newProduct.sort((a, b) => a.price - b.price);
      setProducts(newProduct);
    } else if (type === "high") {
      const newProduct = [...products];
      newProduct.sort((a, b) => b.price - a.price);
      setProducts(newProduct);
    }
  };

  const dispatch = useDispatch(); //리덕스 함수를 사용할 곳에 위치

  //리덕스의 초기값을 가져오는데 사용
  const number = useSelector(state => {
    return state.counter.value;
  })

  return (
    <>
      Home에서 데이터를 받아 수십개의 상품들 나열
 
      <button onClick={() => {
        dispatch(up(3));   // action 값을 변화시킬 때
      }}>+</button> {number};

      <div className={styles.filter}>
        <p onClick={() => sortProduct("recent")}>최신순</p>
        <p onClick={() => sortProduct("row")}>낮은 가격</p>
        <p onClick={() => sortProduct("high")}>높은 가격</p>
      </div>


      <main className={styles.flex_wrap}>
        
        {products.map((product) => { //map을 이용하여 상품 갯수만큼 반복시키기
          return <Product key={`key-${product.id}`} product={product} convertPrice={convertPrice} />;
        })}
        
      </main> 

      <button onClick={() => console.log("더보기")}>더보기</button>
    </>
  );

};
