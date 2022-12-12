//products.js
import styles from "./Products.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { up } from '../../store/counterSlice';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";


export const Products = ({ convertPrice }) => {
  //----------------------------------------페이징 처리를 위한 카운트
  const [count, setCount] = useState(1);
  const increaseNumber = () => { // number의 값을 증가시키는 함수
    setCount(count + 1);
    // setNumber(prevNumber => prevNumber + 1);
    // 다음과 같이 현재 number의 값을 불러와서 증가 시켜주는 방법도 있습니다 :)
  };

  const decreaseNumber = () => { // number의 값을 감소시키는 함수
    setCount(count - 1);
    // setNumber(prevNumber => prevNumber - 1);
    // 다음과 같이 현재 number의 값을 불러와서 감소 시켜주는 방법도 있습니다 :)
  };




  //---------------------------------------------------DAO 시작
  const [state, setState] = useState([]);

  fetch("/api/products", {
    method: "get",
    headers: {
      "content-type": "application/json"
    },
  })
    .then((res) => res.json())
    .then(json => setState(json));
  //--------------------------------------------------------끝
  //----------------------------------------정렬
  fetch("/api/products/id", {
    method: "get",
    headers: {
      "content-type": "application/json"
    },
  })
    .then((res) => res.json())
    .then(json => setState(json));

  fetch("/api/products/pricelow", {
    method: "get",
    headers: {
      "content-type": "application/json"
    },
  })
    .then((res) => res.json())
    .then(json => setState(json));

  fetch("/api/products/pricehigh", {
    method: "get",
    headers: {
      "content-type": "application/json"
    },
  })
    .then((res) => res.json())
    .then(json => setState(json));
  //--------------------------------------------------------끝

  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    console.log(window.scrollY)
    // 스크롤이 Top에서 5000px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 3000) {
      { increaseNumber(); }
      console.log(count)
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌

    }

  };


  // const sortProduct = (type) => {
  //   if (type === "recent") {
  //     const newProduct = [...products];
  //     newProduct.sort((a, b) => a.id - b.id);
  //     setProducts(newProduct);
  //   } else if (type === "row") {
  //     const newProduct = [...products];
  //     newProduct.sort((a, b) => a.price - b.price);
  //     setProducts(newProduct);
  //   } else if (type === "high") {
  //     const newProduct = [...products];
  //     newProduct.sort((a, b) => b.price - a.price);
  //     setProducts(newProduct);
  //   }
  // };

  const dispatch = useDispatch(); //리덕스 함수를 사용할 곳에 위치

  //리덕스의 초기값을 가져오는데 사용
  const number = useSelector(state => {
    return state.counter.value;
  })

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      Home에서 데이터를 받아 수십개의 상품들 나열

      <button onClick={() => {
        dispatch(up(3));   // action 값을 변화시킬 때
      }}>+</button> {number};

      <div className={styles.filter}>
        {/* <p onClick={() => sortProduct("recent")}>최신순</p>
        <p onClick={() => sortProduct("row")}>낮은 가격</p>
        <p onClick={() => sortProduct("high")}>높은 가격</p> */}
      </div>


      <main className={styles.flex_wrap}>

        {state.products && state.products.map((product) => { //map을 이용하여 상품 갯수만큼 반복시키기
          if (!state.products) return 'no data';
          //product
          return <div className={styles.product}>
            <div class="item" data-aos="slide-up">
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
          </div>
        })}
      </main>
    </>
  );

};

