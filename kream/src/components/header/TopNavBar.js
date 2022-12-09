import { Link } from "react-router-dom";
import styles from "./TopNavBar.module.css";
import { useEffect,useState } from "react";

export const TopNavBar = ({ cart }) => {

  const [search, setSearch] = useState("");
  return (
    <header>
      <nav className="navbar navbar-expand-xl nav_area sticky">
        <div className="container">
          <div className={styles.logo}>
            <Link to="/">
              <img className={styles.logoSize} src="/images/logo.jpg" alt="logo" />
            </Link>
          </div>
          <div className={styles.input_wrap}>
            <input className={styles.search} type="text" placeholder="상품을 검색해보세요!"  />&nbsp;
            <Link to="/shop" >
            <img src="/images/icon-search.svg" alt="find" />
            </Link>
          </div>
          <div className=" " id="navbarNav">
            <ul className="navbar-nav ml-auto navbar-center main_menu onepage_nav">
              <li className="nav-item">
                <a className="nav-link" href="/shop">SHOP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">LOGIN</a>
              </li>
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
                    {cart.length >= 1 ? (
                      <div className={styles.new_shopping_cart}>
                        <p>{cart.length}</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="nav-bottom"></div>
    </header>
  );
};