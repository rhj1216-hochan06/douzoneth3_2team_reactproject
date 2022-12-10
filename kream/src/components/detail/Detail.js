import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./detail.module.css";

export const Detail = ({ cart, setCart, convertPrice }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const sessionStorage = window.sessionStorage;

  console.log('카트에 아이디 넘겨주기 되냐?'+sessionStorage.getItem("loginId"));
  //갯수 증감 함수
  const handleQuantity = (type) => {
    if (type === "plus") setCount(count + 1);
    else if (type === "minus") {
      if (count < 2) return;
      setCount(count - 1);
      return;
    }
  }

  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      setProduct(data.data.products.find((product) => product.id === parseInt(id)));
    });
  }, [id, product.price]);

  const handleCart = () => {
    //민약 상품아이디와 유저아이디로 조회했을 떄, 
    //1. 데이터가 있다면 해당 count를 이곳의 count로 변경,
    //2. 데이터가 없다면, id,count,userid를 가져가서 insert를 실행
    fetch("/api/detail",{
      method: "POST",
      headers: {
        "Content-Type":"application/json; charset=utf-8"
      },
      body: JSON.stringify({
        "CART_USERID" : sessionStorage.getItem("loginId"),
        "CART_PRODUCTID" : product.id,
        "CART_COUNT" : count
      })
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data);
      });
  };


  return (
    <>
      <main className={styles.main}>
        <section className={styles.product}>
          <div className={styles.product_img}>
            <img src={product.image} alt="product" />
          </div>
        </section>
        <section className={styles.product}>
          <div className={styles.product_info}>
            <p className={styles.seller_store}>{product.provider}</p>
            <p className={styles.product_name}>{product.name}</p>
            <span className={styles.price}>

              {convertPrice(product.price + "")}


              <span className={styles.unit}>원</span>
            </span>
          </div>

          <div className={styles.delivery}>
            <p>택배배송 / 무료배송</p>
          </div>

          <div className={styles.line}></div>

          <div className={styles.amount}>
            <img
              className={styles.minus}
              src="/images/icon-minus-line.svg"
              alt="minus"
              onClick={() => handleQuantity("minus")}
            />

            <div className={styles.count}>
              <span>{count}</span>
            </div>

            <img
              className={styles.plus}
              src="/images/icon-plus-line.svg"
              alt="plus"
              onClick={() => handleQuantity("plus")}
            />
          </div>

          <div className={styles.line}></div>

          <div className={styles.sum}>
            <div>
              <span className={styles.sum_price}>총 상품 금액</span>
            </div>

            <div className={styles.total_info}>
              <span className={styles.total}>
                총 수량 <span className={styles.total_count}>{count}개</span>
              </span>
              <span className={styles.total_price}>
                {convertPrice(product.price * count + "")}
                <span className={styles.total_unit}>원</span>
              </span>
            </div>
          </div>

          <div className={styles.btn}>
            <button className={styles.btn_buy}>바로 구매</button>
            <button className={styles.btn_cart} onClick={() => handleCart()}>
              장바구니</button>
          </div>
        </section>
      </main>
    </>
  );
};




// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import styles from "./detail.module.css";

// export const Detail = ({ cart, setCart, convertPrice }) => {
//   const { id } = useParams();
//   const [product, setProduct] = useState({});
//   const [count, setCount] = useState(1);

//   //갯수 증감 함수
//   const handleQuantity = (type) => {
//     if (type === "plus") setCount(count + 1);
//     else if (type === "minus") {
//       if (count < 2) return;
//       setCount(count - 1);
//       return;
//     }
//   }

//   useEffect(() => {
//     axios.get("/data/products.json").then((data) => {
//       setProduct(data.data.products.find((product) => product.id === parseInt(id)));
//     });
//   }, [id, product.price]);

//   //장바구니 물건 중복된 물건 수량만 갱신해서 업데이트
//   const setQuantity = (id, quantity) => {
//     const found = cart.filter((el) => el.id === id)[0];
//     const idx = cart.indexOf(found);
//     const cartItem = {
//       id: product.id,
//       name: product.name,
//       provider: product.provider,
//       image: product.image,
//       price: product.price,
//       category: product.category,
//       gender:product.gender,
//       quantity: quantity,
//     };
//     //처음부터, idx까지, cartItem, 그리고 끝까지
//     setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
//   }

//   const handleCart = () => {
//     const cartItem = {
//       id: product.id,
//       image: product.image,
//       name: product.name,
//       quantity: count,
//       price: product.price,
//       gender:product.gender,
//       provider: product.provider,
//     };
//     const found = cart.find((el) => el.id === cartItem.id);
//     //중복된 물건이 있다면? (found>0)
//     if (found) setQuantity(cartItem.id, found.quantity + count);
//     //수량만 변경해서 넣어준다.
//     else setCart([...cart, cartItem]);
//     //아니라면 그대로 장바구니에 넣어준다.
//   };


//   return (
//     <>
//       <main className={styles.main}>
//         <section className={styles.product}>
//           <div className={styles.product_img}>
//             <img src={product.image} alt="product" />
//           </div>
//         </section>
//         <section className={styles.product}>
//           <div className={styles.product_info}>
//             <p className={styles.seller_store}>{product.provider}</p>
//             <p className={styles.product_name}>{product.name}</p>
//             <span className={styles.price}>

//               {convertPrice(product.price + "")}


//               <span className={styles.unit}>원</span>
//             </span>
//           </div>

//           <div className={styles.delivery}>
//             <p>택배배송 / 무료배송</p>
//           </div>

//           <div className={styles.line}></div>

//           <div className={styles.amount}>
//             <img
//               className={styles.minus}
//               src="/images/icon-minus-line.svg"
//               alt="minus"
//               onClick={() => handleQuantity("minus")}
//             />

//             <div className={styles.count}>
//               <span>{count}</span>
//             </div>

//             <img
//               className={styles.plus}
//               src="/images/icon-plus-line.svg"
//               alt="plus"
//               onClick={() => handleQuantity("plus")}
//             />
//           </div>

//           <div className={styles.line}></div>

//           <div className={styles.sum}>
//             <div>
//               <span className={styles.sum_price}>총 상품 금액</span>
//             </div>

//             <div className={styles.total_info}>
//               <span className={styles.total}>
//                 총 수량 <span className={styles.total_count}>{count}개</span>
//               </span>
//               <span className={styles.total_price}>
//                 {convertPrice(product.price * count + "")}
//                 <span className={styles.total_unit}>원</span>
//               </span>
//             </div>
//           </div>

//           <div className={styles.btn}>
//             <button className={styles.btn_buy}>바로 구매</button>
//             <button className={styles.btn_cart} onClick={() => handleCart()}>
//               장바구니</button>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };
