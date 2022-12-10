import { Link } from "react-router-dom";
import styles from "./TopNavBar.module.css";
import { useEffect, useState } from "react";

export const TopNavBar = () => {
  const [count, setCount] = useState([]);
  const sessionStorage = window.sessionStorage;

  useEffect(() => {
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
  }, []);

  return (
    // <header>
    //   <nav className="navbar navbar-expand-xl nav_area sticky">
    //     <div className="container">
    //       <div className={styles.logo}>
    //         <Link to="/">
    //           <img className={styles.logoSize} src="/images/logo.jpg" alt="logo" />
    //         </Link>
    //       </div>
    //       <div className={styles.input_wrap}>
    //         <input className={styles.search} type="text" placeholder="상품을 검색해보세요!"  />&nbsp;
    //         <Link to="/shop" >
    //         <img src="/images/icon-search.svg" alt="find" />
    //         </Link>
    //       </div>
    //       <div className=" " id="navbarNav">
    //         <ul className="navbar-nav ml-auto navbar-center main_menu onepage_nav">
    //           <li className="nav-item">
    //             <a className="nav-link" href="/shop">SHOP</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/login">LOGIN</a>
    //           </li>
    //           <li className="nav-item">
    //             {/*                   
    //             <div className={styles.shopping_cart}>
    //             <a className="nav-link" href="/cart">CART
    //             {cart.length >= 1  ? (
    //               <div className={styles.new_shopping_cart}>
    //               <p>{cart.length}</p>
    //               </div>
    //               ) : (
    //                 ""
    //                 )}
    //               </a> 
    //               </div>*/}
    //             <Link to="/cart">
    //               <div className={styles.shopping_cart}>
    //                 CART
    //                 {cart.length >= 1 ? (
    //                   <div className={styles.new_shopping_cart}>
    //                     <p>{cart.length}</p>
    //                   </div>
    //                 ) : (
    //                   ""
    //                 )}
    //               </div>
    // //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    //   <div className="nav-bottom"></div>
    // </header>
    <header>
      <div className={styles.header_md}>
        <div className={styles.header_top}>
          <div className={styles.top_inner}>
            <ul className={styles.top_list}>
              <li className="nav-item">
                {/*                   
                <div className={styles.shopping_cart}>
                <a className="nav-link" href="/cart">CART
                {cart.length >= 1  ? (
                  <div className={styles.new_shopping_cart}>
                  <p>{cart.length}</p>
                  </div>
                  ) : (
                    ""
                    )}
                  </a> 
                  </div>*/}
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