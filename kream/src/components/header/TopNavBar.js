import { Link } from "react-router-dom";
import styles from "./TopNavBar.module.css";
import { useEffect, useState } from "react";

export const TopNavBar = () => {
  const [count, setCount] = useState([]);
  const sessionStorage = window.sessionStorage;


    fetch("/api/nav", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        "id": sessionStorage.getItem("loginId"),
      })
    })
      .then((res) => res.json())
      .then(json => {
        setCount(Object.keys(json).length);
      }
      );


  return (
    <header>
      <div className={styles.header_md}>
        <div className={styles.header_top}>
          <div className={styles.top_inner}>
            <ul className={styles.top_list}>
              <li className="nav-item">
                <Link to="/cart">
                  <div className={styles.shopping_cart}>
                    CART
                    {count >= 1 ? (
                      <div className={styles.new_shopping_cart}>
                        <p className={styles.cart_num}>{count}</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
              </li>
              <li className={styles.top_item}>
                <a href="" className={styles.top_link}>마이페이지</a>
              </li>
              <li className={styles.top_item}>
                <a href="/login" className={styles.top_link}>로그인</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.header_main}>
          <div className={styles.main_inner}>
            <h1>
              <Link to="/">
                <img className={styles.logo} src="/images/logo.jpg" alt="logo" />
              </Link>
            </h1>
            <div className={styles.gnb_area}>
              <nav className={styles.gnb}>
                <ul className={styles.gnb_list}>
                  <li className={styles.gnb_item}>
                    <a href="" className={styles.gnb_link}>SHOP</a>
                  </li>
                  <li className={styles.search_btn}>
                    <Link to="/shop" >
                      <img src="/images/search-icon.svg" alt="find" className={styles.search} />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};