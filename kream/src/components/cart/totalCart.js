import styles from "./cart.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const TotalCart = ({ total, setTotal, cart, convertPrice, found }) => {
  const sessionStorage = window.sessionStorage;
  const [id, setId] = useState("");


  useEffect(() => {
    setId("/purchasecart/buy/" + sessionStorage.getItem("loginId"));

    if (found) { //만약에 값이 있다면 즉, 계산할 필요가 있다면
      const temp = found.filter((item) => item.length !== 0);
      const sum = temp.map((item) => item[0].sale_price * 1);//1 -> item[0].cart_count
      const reducer = (acc, cur) => acc + cur;
      //   sum 길이가 0이면 결과값은 0이다.
      if (sum.length === 0) {
        setTotal(0);
        return;
      }
      const itemTotal = sum.reduce(reducer);
      setTotal(itemTotal);
    } else {
      setTotal(0);
    }
  }, [cart, total, found, setTotal]);

  return (
    <div className={styles.total}>
      <div className={styles.total_price}>
        <p className={styles.cart_product_total_price}>총 상품금액</p>
        <p className={styles.cart_product_price}>{convertPrice(total)}</p>
      </div>
      <div className={styles.pay_minus}>
        <img src="/images/icon-minus-line.svg" alt="minus" />
      </div>
      <div className={styles.sale}>
        <p className={styles.cart_product_sale}>상품 할인</p>
        <p className={styles.cart_product_sale_price}>0원</p>
      </div>
      <div className={styles.pay_plus}>
        <img src="/images/icon-plus-line.svg" alt="plus" />
      </div>
      <div className={styles.delivery}>
        <p className={styles.cart_product_delivery}>배송비</p>
        <p className={styles.cart_product_delivery_price}>0원</p>
      </div>

      <div className={styles.payment}>
        <p className={styles.cart_prouct_payment}>결제 예정 금액</p>
        <p className={styles.cart_prouct_payment_price}>
          {convertPrice(total)}
        </p>
      </div>

      <Link to={id} ><button className={styles.asd} >한꺼번에 결제</button></Link>
    </div >
  );
};
