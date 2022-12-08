import { Link } from "react-router-dom";
import styles from "./TopNavBar.module.css";

export const TopNavBar = () => {
  return (
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