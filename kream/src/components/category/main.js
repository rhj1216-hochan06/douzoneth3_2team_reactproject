import React from 'react';
import { Link, Outlet } from "react-router-dom";
import styles from "./category.module.css";

export const Main = () => {

    return (
        <>
            <div>
                <br /><br /><br />
                <h1 className={styles.shop}>SHOP</h1><br />
                <ul className={styles.category}>
                    <li>
                        <Link to="/main/products" className={styles.category1}>전체목록</Link>
                    </li>
                    <li>
                        <Link to="/main/accessorie" className={styles.category1}>패션잡화</Link>
                    </li>
                    <li>
                        <Link to="/main/tech" className={styles.category1}>테크</Link>
                    </li>
                    <li>
                        <Link to="/main/cloth" className={styles.category1}>의류</Link>
                    </li>
                    <li>
                        <Link to="/main/life" className={styles.category1}>라이프</Link>
                    </li>
                </ul>
                <hr />
                <Outlet></Outlet>
            </div >
        </>
    );
};

