//products.js
import styles from "./Products.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";


export const Products = ({ convertPrice }) => {
  //정렬 변수 
  const [count1, setCount1] = useState(1);
  const [start, setstart] = useState(1);
  const [end, setend] = useState(12);
  const [plength, setPLength] = useState(0);
  const upCount = (event) => {
    setCount1(count1 + 1);
  }


  const Countdown = (event) => {
    if (start < 12) return Initcount();
    setstart(start - 12);
    setCount1(count1 - 12);
    setend(end - 12);
    console.log(start);
    console.log(end);

  }
  const Countup = (event) => {
    if (plength < end) return Initcount();
    setstart(start + 12);
    setCount1(count1 + 12);
    setend(end + 12);
    console.log(start);
    console.log(end);

  }
  const Initcount = (event) => {
    setstart(1);
    setCount1(1);
    setend(12);
    console.log(start);
    console.log(end);

  }

  //---------------------------------------------------DAO 시작
  const [state, setState] = useState([]);

  const onA = (event) => {
    Initcount();
    fetch("/api/word", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application / json",
      }, body: JSON.stringify({
        "word": "id",

      })
    })
      .then((res) => res.json())
      .then(json => {
        setState(json);
        setPLength(json.products.length);
      });
  }

  //--------------------------------------------------------끝
  //----------------------------------------정렬

  const Orderwordid = () => {
    Initcount();
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
        setPLength(json.products.length);
      });
  }
  const Orderwordprice = () => {
    Initcount();
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
        setPLength(json.products.length);
      });
  }
  const Orderwordpricedesc = () => {
    Initcount();
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
        setPLength(json.products.length);
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

    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll); //clean up
    // };
  }, []);

  // const handleScroll = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY >= 400)
  //     UP
  //   else {
  //     console.log(count);
  //   }
  // };

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
          if (!state.products) {
            return 'no data';
          }
          //product
          else
            if (start <= product.rownum && product.rownum <= end) {
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
            }

        }
        )}
        <div >
          <a href="#top"><button onClick={Countdown}> 이전 페이지 </button></a>
          <a href="#top"><button onClick={Countup}> 다음 페이지 </button></a>
        </div>
      </main>
    </>
  );

};

