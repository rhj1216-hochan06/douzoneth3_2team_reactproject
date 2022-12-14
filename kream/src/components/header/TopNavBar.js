import { Link } from "react-router-dom";
import styles from "./TopNavBar.module.css";
import { useEffect, useState } from "react";

export const TopNavBar = () => {
  const [count, setCount] = useState([]);
  const sessionStorage = window.sessionStorage;
  // const [userid, setUserid] = useState("환영합니다");
  // setUserid(sessionStorage.getItem("loginId"));
  useEffect(() => {
    onA();
  }, [])
  const onA = (event) => {
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
  }
  const onLogout = (event) => {
    sessionStorage.setItem("loginId", "");
  }

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
                {sessionStorage.getItem("loginId") !== "" && sessionStorage.getItem("loginId") !== null ? (
                  <a>{sessionStorage.getItem("loginId")}님 환영합니다!</a>
                ) : (
                  <a></a>
                )}
              </li>
              <li className={styles.top_item}>
                <Link to="/mypage" className={styles.top_link}>마이페이지</Link>
              </li>
              <li className={styles.top_item}>
                {sessionStorage.getItem("loginId") !== null && sessionStorage.getItem("loginId") !== "" ? (
                  <a href="/" onClick={onLogout}>로그아웃</a>
                ) : (
                  <a href="/login" className={styles.top_link}>로그인</a>
                )}


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
                    <Link to="/main/products" >
                      <a className={styles.gnb_link}>SHOP</a>
                    </Link>
                  </li>
                  <li className={styles.search_btn}>
                    <Link to="/search" >
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