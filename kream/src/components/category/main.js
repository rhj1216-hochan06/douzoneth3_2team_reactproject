import React from 'react';
import { Link, Outlet } from "react-router-dom";

export const MainCategory = () => {
    return (
        <>
            <div>
                <ul>
                    <h1>전체 카테고리</h1>
                    <li>
                        <Link to="/mainCategory/accrssorieCategory">패션잡화</Link>
                    </li>
                    <li>
                        <Link to="/mainCategory/techCategory">의류</Link>
                    </li>
                    <li>
                        <Link to="/mainCategory/clothCategory">테크</Link>
                    </li>
                    <li>
                        <Link to="/mainCategory/lifeCategory">라이프</Link>
                    </li>
                </ul>
                <hr />
                <Outlet />
            </div >
        </>
    );
};

