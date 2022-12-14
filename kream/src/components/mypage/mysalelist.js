import React, { useState } from 'react'
import styles from "./mypage.module.css";
import { json, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { render } from "react-dom";

import Login from '../loginregister/Login.js';



export const Mysale = (convertPrice) => {

    console.log('sale information0');
const [productid, setProductid] = useState("");
const [price, setPrice] = useState();
const [sixe, setSize] = useState("");
const [date, setDate] = useState("");
const [state, setState] = useState([]);
const [userid, setUserid] = useState("");

fetch("/api/mypageshop", {

    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"

    },
    body: JSON.stringify({
      "id": sessionStorage.getItem("loginId")

    })

  })
    .then((res) => res.json())
    .then(json => {
       
       setState(json);
    })
     
    

    return (
<>  

 
<h3 className={styles.contentName1}> 내가 판매중인 상품</h3>
    <hr className={styles.line} /><br />
    
    <p className={styles.contentName4}>상품 정보</p>
    <hr className={styles.line2} />
    
{state.sale && state.sale.map((product) => { //map을 이용하여 상품 갯수만큼 반복시키기
            console.log(product)
            if (!state.sale) return 'no data';
            //  return <Product key={`key-${product.id}`} product={product} convertPrice={convertPrice} />;
            return <div className={styles.product}>
              <div class="item" data-aos="slide-up">
                {/* <Link to={`/products/${product.id}`}>
                  <div className={styles.product_image}>
                    <img src={product.image} alt="product" />
                  </div>
</Link> */}
                <div className={styles.store}>
                  <span>{product.SALE_PRODUCTID}</span>
                </div>
  
                <div className={styles.product_name}>
                  <span>{product.SALE_SIZE}</span>
                </div>
  
                <div className={styles.product_price}>
                <span className={styles.price}>{product.SALE_PRICE}</span> 
                  <span className={styles.unit}>원</span>
                </div><br /><br /><br />
              </div>
            </div>
          })}
</>
    )
}

