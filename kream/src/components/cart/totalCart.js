import styles from "./cart.module.css";
import { useEffect } from "react";
export const TotalCart = ({}) => {
    return(
        <section className={styles.cart_product_list}>
        <input type="checkbox" />
        <div className={styles.cart_product_wrap}>
            <div className={styles.cart_product_image}>
                <img src="images/image001.png" alt="product-img" />
            </div>

            <div className={styles.cart_product_info}>
                <p className={styles.seller_store}>아이돈케어</p>
                <p className={styles.product_name}>노트북 파우치</p>
                <p className={styles.price}>1000원</p>
                <p className={styles.delivery}>택배배송 / 무료배송</p>
            </div>
        </div>

        <div className={styles.cart_product_count}>
            <img
                className={styles.minus}
                src="/images/icon-minus-line.svg"
                alt="minus"
            />

            <div className={styles.count}>
                <span>5</span>
            </div>
            <img
                className={styles.plus}
                src="/images/icon-plus-line.svg"
                alt="plus"
            />
        </div>

        <div className={styles.cart_product_price}>
            <p className={styles.total_price}></p>
            <button className={styles.btn_submit}>주문하기</button>
        </div>

        <div className={styles.product_remove}>
            <img src="/images/icon-delete.svg" alt="delete" />
        </div>
    </section>
    );
};



// export const TotalCart = ({ total, setTotal, cart, convertPrice, found }) => {
//   useEffect(() => {
//     if (found) {
//       const temp = found.filter((item) => item.length !== 0);
//       const sum = temp.map((item) => item[0].price * item[0].quantity);
//       const reducer = (acc, cur) => acc + cur;
//       if (sum.length === 0) {
//         setTotal(0);
//         return;
//       }
//       const itemTotal = sum.reduce(reducer);
//       setTotal(itemTotal);
//     } else {
//       setTotal(0);
//     }
//   }, [cart, total, found, setTotal]);

//   return (
//     <div className={styles.total}>
//       <div className={styles.total_price}>
//         <p className={styles.cart_product_total_price}>총 상품금액</p>
//         <p className={styles.cart_product_price}>{convertPrice(total)}</p>
//       </div>
//       <div className={styles.pay_minus}>
//         <img src="/images/icon-minus-line.svg" alt="minus" />
//       </div>
//       <div className={styles.sale}>
//         <p className={styles.cart_product_sale}>상품 할인</p>
//         <p className={styles.cart_product_sale_price}>0원</p>
//       </div>
//       <div className={styles.pay_plus}>
//         <img src="/images/icon-plus-line.svg" alt="plus" />
//       </div>
//       <div className={styles.delivery}>
//         <p className={styles.cart_product_delivery}>배송비</p>
//         <p className={styles.cart_product_delivery_price}>0원</p>
//       </div>

//       <div className={styles.payment}>
//         <p className={styles.cart_prouct_payment}>결제 예정 금액</p>
//         <p className={styles.cart_prouct_payment_price}>
//           {convertPrice(total)}
//         </p>
//       </div>
//     </div>
//   );
// };
