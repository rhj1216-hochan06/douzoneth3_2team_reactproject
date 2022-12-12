import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export const Main = () => {

    return (
        <>
            <div>
                <header>
                    <ul>
                        <h1>전체 카테고리</h1>
                        <li>
                            <Link to="/main/accessorie">패션잡화</Link>
                        </li>
                        <li>
                            <Link to="/main/tech">테크</Link>
                        </li>
                        <li>
                            <Link to="/main/cloth">의류</Link>
                        </li>
                        <li>
                            <Link to="/main/life">라이프</Link>
                        </li>
                    </ul>
                </header>
                <hr />
                <Outlet></Outlet>
            </div >
        </>
    );
};

