import styles from "./cart.module.css";

export const CartList = ({ cart , convertPrice , handleQuantity, handleRemove, handleCheckList, checkLists}) => {
  return(
    <section className={styles.cart_product_list}>
    <input
        type="checkbox"
        id={cart.id}
        onChange={(e) =>{
          handleCheckList(e.currentTarget.checked, `${cart.id}`);
          //체크되면 현재체크리스트에 해당 id를 추가하고, 체크해제면 현재 체크리스트에서 id제거
        }}
        checked={checkLists.includes(`${cart.id}`) ? true : false}
        //체크리스트에 없으면 false 있으면 true
      />
      
    <div className={styles.cart_product_wrap}>
        <div className={styles.cart_product_image}>
        <img src={cart.image} alt="product-img" />
        </div>

        <div className={styles.cart_product_info}>
            <p className={styles.seller_store}>{cart.provider}</p>
            <p className={styles.product_name}>{cart.name}</p>
            <p className={styles.price}>{convertPrice(cart.price)}원</p>
            <p className={styles.delivery}>택배배송 / 무료배송</p>
        </div>
    </div>

    <div className={styles.cart_product_count}>
        <img
            className={styles.minus} 
            src="/images/icon-minus-line.svg"
            alt="minus"
            onClick={()=>handleQuantity(cart.id,"minus")}
            />

        <div className={styles.count}>
            <span>{cart.quantity}</span>
        </div>
        <img
            className={styles.plus}
            src="/images/icon-plus-line.svg"
            alt="plus"
            onClick={()=>handleQuantity(cart.id,"plus")}
        />
    </div>

    <div className={styles.cart_product_price}>
        <p className={styles.total_price}></p>
        <button className={styles.btn_submit}>주문하기</button>
    </div>

    <div className={styles.product_remove} onClick={() => handleRemove(cart.id)}>
        <img src="/images/icon-delete.svg" alt="delete" />
    </div>
</section>

  );
};
