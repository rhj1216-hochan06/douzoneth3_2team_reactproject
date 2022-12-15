import React from 'react';
import { Link, Outlet } from "react-router-dom";
import styles from "./category.module.css";

export const Main = () => {

    return (
        <>
            <div>
                <br /><br /><br />
                <h1 className={styles.shop}>SHOP</h1><br /><br /><br />
                <div className={styles.Categoryimg}>
                    <Link to="/main/products">
                        <img className={styles.img} src="../images/allCategory.png" />
                    </Link>
                    <Link to="/main/accessorie">
                        <img className={styles.img} src="../images/AccCategory.png" />
                    </Link>
                    <Link to="/main/tech">
                        <img className={styles.img} src="../images/techCategory.png" />
                    </Link>
                    <Link to="/main/cloth">
                        <img className={styles.img} src="../images/clothCategory.png" />
                    </Link>
                    <Link to="/main/life">
                        <img className={styles.img} src="../images/lifeCategory.png" />
                    </Link>
                </div>
                <ul className={styles.category}>
                    <li>
                        <Link to="/main/products" className={styles.category1}>전체목록</Link>
                    </li>
                    <li>
                        <Link to="/main/accessorie" className={styles.category3}>패션잡화</Link>
                    </li>
                    <li>
                        <Link to="/main/tech" className={styles.category4}>테크</Link>
                    </li>
                    <li>
                        <Link to="/main/cloth" className={styles.category5}>의류</Link>
                    </li>
                    <li>
                        <Link to="/main/life" className={styles.category6}>라이프</Link>
                    </li>
                </ul>
                <hr />
                <Outlet></Outlet>
            </div >
        </>
    );
};

