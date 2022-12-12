import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export const Main = () => {

    const [state, setState] = useState([]);

    fetch("/api/main/accessorieCategory", {
        method: "get",
        headers: {
            "content-type": "application/json",
            Accept: "application / json",
        },
    })
        .then((res) => res.json())
        .then(json => setState(json));

    fetch("/api/main/clothCategory", {
        method: "get",
        headers: {
            "content-type": "application/json",
            Accept: "application / json",
        },
    })
        .then((res) => res.json())
        .then(json => setState(json));

    fetch("/api/main/lifeCategory", {
        method: "get",
        headers: {
            "content-type": "application/json",
            Accept: "application / json",
        },
    })
        .then((res) => res.json())
        .then(json => setState(json));

    fetch("/api/main/techCategory", {
        method: "get",
        headers: {
            "content-type": "application/json",
            Accept: "application / json",
        },
    })
        .then((res) => res.json())
        .then(json => setState(json));

    return (
        <>
            <div>
                <header>
                    <ul>
                        <h1>전체 카테고리</h1>
                        <li>
                            <Link to="/main/accrssorieCategory">패션잡화</Link>
                        </li>
                        <li>
                            <Link to="/main/techCategory">의류</Link>
                        </li>
                        <li>
                            <Link to="/main/clothCategory">테크</Link>
                        </li>
                        <li>
                            <Link to="/main/lifeCategory">라이프</Link>
                        </li>
                    </ul>
                </header>
                <hr />
                <Outlet></Outlet>
            </div >
        </>
    );
};

