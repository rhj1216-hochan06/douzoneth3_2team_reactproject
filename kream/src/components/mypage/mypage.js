import React, { useState , useEffect} from 'react'
import styles from "./mypage.module.css";
import { json, Link, Outlet  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { render } from "react-dom";

import Login from '../loginregister/Login.js';
import {Myprofile} from './myprofile';



export const Mypage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({});
  const [user, setUser] = useState({});
  const [userid, setUserid] = useState("");
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userphonenumber, setUserphonenumber] = useState("");
  const [useraddress, setAddress] = useState("");
  
  useEffect(() => {
    <Myprofile/>
  
  }, []);


  if (sessionStorage.getItem("loginId") === "" || sessionStorage.getItem("loginId") === null) {
    alert("로그인이 필요한 서비스 입니다.")
     window.location ='/login';
  } else {


      return (
        <><br/>
          <div >
        <div className={styles.box}>
        <br/>
        <br/>
          <ul >
            <p className={styles.contentName1}>나의 정보</p>
            <hr className={styles.line5}/><br/>
            <li >
              <Link className={styles.linklist} to="/mypage/profile">내 프로필</Link>
            </li><hr className={styles.line4}/><br/><br/><br/>

            <p className={styles.contentName1}>구매/판매 정보</p>
            <hr className={styles.line5}/><br/>
            <li>
              <Link className={styles.linklist} to="/mypage/salelist">내가 판매중인 상품</Link>
            </li><br/> <hr className={styles.line4}/>
            <li>
              <Link className={styles.linklist} to="/mypage/saledlist">내가 판매완료한 상품</Link>
            </li><br/> <hr className={styles.line4}/>
            <li>
              <Link className={styles.linklist} to="/mypage/buylist">내가 구매한 상품</Link>
            </li><br/> <hr className={styles.line4}/>
          </ul>
          </div>
          <div>
          <Outlet />    
          </div>
          </div>
        </>
      );

}
}