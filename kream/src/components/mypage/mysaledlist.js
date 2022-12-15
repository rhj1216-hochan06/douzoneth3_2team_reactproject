import React, { useEffect, useState } from 'react'
import styles from "./mypage.module.css";
import { json, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { render } from "react-dom";

import Login from '../loginregister/Login.js';



export const Mysaled = (convertPrice) => {

  console.log('saled information0');
  const [productid, setProductid] = useState("");
  const [price, setPrice] = useState();
  const [sixe, setSize] = useState("");
  const [date, setDate] = useState("");
  const [state, setState] = useState([]);
  const [userid, setUserid] = useState("");

  useEffect(() => {
    onA();
  }, [])
const onA = (event) => {
fetch("/api/mypagesaled", {

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
     
  }



  return (
    <>
 


      <div className={styles.contenttt}>
        <div className={styles.main_content}>

          <div className={styles.contentcenter}>
            <h3 className={styles.contentName1}> &nbsp;&nbsp;&nbsp; 내 판매 완료 기록</h3><br />
            <hr className={styles.line} /><br />

            
            <table class="type10">
              <thead>
                <tr>
                  <th  className={styles.jb_th_1} scope="cols">상품</th>
                  <th scope="cols">상품번호</th>
                  <th className={styles.jb_th_3} scope="cols">이름</th>
                  <th scope="cols">사이즈</th>
                  <th scope="cols">가격</th>
                  <th scope="cols">등록날짜</th>
                </tr>
              </thead>
              <tbody>
                {state.sale && state.sale.map((product) => { //map을 이용하여 상품 갯수만큼 반복시키기
                  console.log(product)
                  if (!state.sale) return 'no data';
                  //  return <Product key={`key-${product.id}`} product={product} convertPrice={convertPrice} />;
                  return <tr>
                      <td>
                        <Link to={`/products/${product.SALE_PRODUCTID}`}>
                          <div className={styles.product_image}>
                            <img src={product.image} alt="product" />
                          </div>
                        </Link></td>
                   
                      <td>{product.SALE_PRODUCTID}</td>
                   
                      <td>{product.name}</td>

                      <td>{product.SALE_SIZE}</td>
                    
                      <td>{product.SALE_PRICE}원</td>
                    
                      <td>{product.DATE}</td>
                    </tr>

                  


                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </>
  )
}


