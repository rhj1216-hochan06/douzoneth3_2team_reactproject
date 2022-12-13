import React, { useState } from 'react'
import styles from "./mypage.module.css";
import { json, Link, Outlet  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { render } from "react-dom";

import Login from '../loginregister/Login.js';




export const Mypage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({});
  const [user, setUser] = useState({});
  const [userid, setUserid] = useState("");
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userphonenumber, setUserphonenumber] = useState("");
  const [useraddress, setAddress] = useState("");



  if (sessionStorage.getItem("loginId") === "" || sessionStorage.getItem("loginId") === null) {
    alert("로그인이 필요한 서비스 입니다.")
    return window.location = '/login';
  } else {


      return (
        <>
          <ul>
            <li>
              <Link to="/mypage/profile">mypageprofile</Link>
            </li>
            <li>
              <Link to="/mypage/salelist">mypagesale</Link>
            </li>
          </ul>
          <Outlet />    
        </>
      );

}
}