import React, { useEffect, useState } from 'react'
import styles from "./mypage.module.css";
import { json, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { render } from "react-dom";

import Login from '../loginregister/Login.js';



export const Mybuy = (convertPrice) => {

  console.log('sale information0');
  const [productid, setProductid] = useState("");
  const [price, setPrice] = useState();
  const [sixe, setSize] = useState("");
  const [date, setDate] = useState("");
  const [state, setState] = useState([]);
  const [userid, setUserid] = useState("");

  
  const [count1, setCount1] = useState(1);
  const [start, setstart] = useState(1);
  const [end, setend] = useState(20);
  const [plength, setPLength] = useState(20);

  const Countdown = (event) => {
    if (start < 20) return Initcount();
    setstart(start - 20);
    setCount1(count1 - 1);
    setend(end - 20);
    console.log(start);
    console.log(end);

  }
  const Countup = (event) => {
    if (plength < end) return Initcount();
    setstart(start + 20);
    setCount1(count1 + 1);
    setend(end + 20);
    console.log(start);
    console.log(end);


  }
  const Initcount = (event) => {
    setstart(1);
    setCount1(1);
    setend(20);
    console.log(start);
    console.log(end);
  }

  useEffect(() => {
    onA();
  }, [])

  const onA = (event) => {
    fetch("/api/mypagebuy", {

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
        setPLength(json.sale.length);
      })
  }



  return (
    <>
     
     <div className={styles.contenttt}>
        <div className={styles.main_content}>

          <div className={styles.contentcenter}>
            <h3 className={styles.contentName1}> &nbsp;&nbsp;&nbsp; 내가 구매한 상품</h3><br />
            <hr className={styles.line} /><br />


            <table class="type10">
              <thead>
                <tr>
                <th scope="cols">번호</th>
                  <th className={styles.jb_th_1} scope="cols">상품</th>
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
                  if (!state.sale) { return 'no data'; }
                  //  return <Product key={`key-${product.id}`} product={product} convertPrice={convertPrice} />;
                  else
                    if (start <= product.rownum && product.rownum <= end) {
                      return <tr>
                        <td>{product.rownum}</td>
                        <td className={styles.cellwid}><Link to={`/products/${product.SALE_PRODUCTID}`}>
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
                    }



                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <main className={styles.flex_wrap2}>
        <div className={styles.page1}>
          <a href="#top">
            <img className={styles.pagenationImg} src="/images/arrow1.png" alt="countdown" onClick={Countdown} />
          </a>
        </div>
        <div className={styles.page1}>
          <p className={styles.pagenationImg2}>{count1} / {Math.ceil(plength / 20)} </p>
        </div>
        <div className={styles.page1}>
          <a href="#top">
            <img className={styles.pagenationImg} src="/images/arrow2.png" alt="countdown" onClick={Countup} />
          </a>
        </div>
      </main>
    </>
  )
}


