//products.js
import styles from "./Products.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { up } from '../../store/counterSlice';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";


export const Products = ({ convertPrice }) => {
  //정렬 변수 
  const [word, setWord] = useState("id");


  //---------------------------------------------------DAO 시작
  const [state, setState] = useState([]);

  const onA = (event) => {
    fetch("/api/products", {
      method: "get",
      headers: {
        "content-type": "application/json"
      },
    })
      .then((res) => res.json())
      .then(json => setState(json));
  }

  //--------------------------------------------------------끝
  //----------------------------------------정렬

  const Orderwordid = () => {
    fetch("/api/word", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application / json",
      }, body: JSON.stringify({
        "word": "id desc",

      })
    })
      .then((res) => res.json())
      .then(json => {
        setState(json);
      });
  }
  const Orderwordprice = () => {
    console.log("price");
    fetch("/api/word", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application / json",
      }, body: JSON.stringify({
        "word": "price",

      })
    })
      .then((res) => res.json())
      .then(json => {
        setState(json);
      });
  }
  const Orderwordpricedesc = () => {
    console.log("pricedesc");
    fetch("/api/word", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application / json",
      }, body: JSON.stringify({
        "word": "price desc",

      })
    })
      .then((res) => res.json())
      .then(json => {
        setState(json);
      });
  }

  // const onword = (event) => {
  //   fetch("/api/word", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //       Accept: "application / json",
  //     }, body: JSON.stringify({
  //       "word": word,

  //     })
  //   })
  //     .then((res) => res.json())
  //     .then(json => {
  //       setState(json);
  //     });

  // }
  //--------------------------------------------------------끝

  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
    onA();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // console.log(window.scrollY)
    // // 스크롤이 Top에서 5000px 이상 내려오면 true값을 useState에 넣어줌
    // if (window.scrollY >= 3000) {
    // } else {
    //   // 스크롤이 50px 미만일경우 false를 넣어줌
    // }

  };

  //json 버전 정렬
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



      <div className={styles.filter}>
        <p onClick={onA} > 상품</p>
        <p onClick={Orderwordid}  >신상품</p>
        <p onClick={Orderwordprice}>낮은 가격</p>
        <p onClick={Orderwordpricedesc}>높은 가격</p>
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

