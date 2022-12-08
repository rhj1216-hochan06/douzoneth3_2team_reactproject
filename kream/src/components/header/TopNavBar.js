import { Link } from "react-router-dom";
import styles from "./TopNavBar.module.css";

export const TopNavBar = () => {
  return (
    // <header classNameName={styles.header}>
    //   <div classNameName={styles.inner}>
    //     <Link to="/">
    //       <h1 classNameName={styles.logo}>
    //         <img src="/images/logo.jpg" alt="logo" />
    //       </h1>
    //     </Link>
    //     <div classNameName={styles.input_wrap}>
    //       <input type="text" placeholder="상품을 검색해보세요!" />
    //       <img src="/images/icon-search.svg" alt="search" />
    //     </div>
    //   </div>
    //   <div classNameName={styles.menu}>
    //     <Link to="">
    //       <div classNameName={styles.shop}>
    //         <img src="/images/icon-shopping-cart.svg" alt="shop" />
    //         <span>SHOP</span>
    //       </div>
    //     </Link>
    //     <Link to="/cart">
    //       <div classNameName={styles.shopping_cart}>
    //         <img src="/images/icon-shopping-cart.svg" alt="cart" />
    //         <span>CART</span>
    //       </div>
    //     </Link>
    //     <Link to="">
    //       <div classNameName={styles.mypage}>
    //         <img src="/images/icon-user.svg" alt="user" />
    //         <span>LOGIN</span>
    //       </div>
    //     </Link>
    //   </div>
    // </header>
    <header>
      <nav className="navbar navbar-expand-xl nav_area sticky">
        <div className="container">
          <div className={styles.logo}>
            <img  className={styles.logoSize} src="/images/logo.jpg" alt="logo" />
          </div>
          <div className={styles.input_wrap}>
            <input className={styles.search} type="text" placeholder="상품을 검색해보세요!" />&nbsp;
            <img src="/images/icon-search.svg" alt="search" />
          </div>
          <div className=" " id="navbarNav">
            <ul className="navbar-nav ml-auto navbar-center main_menu onepage_nav">
              <li className="nav-item">
                <a className="nav-link" href="">SHOP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">LOGIN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">CART</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="nav-bottom"></div>
    </header>
  );
};