import React, { useState } from 'react'
import styles from "./mypage.module.css";
import { json, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


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
  }else{

  fetch("/api/mypage", {

    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"

    },
    body: JSON.stringify({
      "id": sessionStorage.getItem("loginId")

    })

  })
    .then((res) => res.json())
    .then(data => {
      setUsername(data.user[0].username)
      setUserid(data.user[0].userid)
      setUserphonenumber(data.user[0].userphonenumber)
      setUseremail(data.user[0].useremail)
      setAddress(data.user[0].useraddress)
    }
    )


  }

  return (
    <>
    <h3 className={styles.contentName1}> 프로필 정보</h3>
    <br/>
   <hr className={styles.line}/>
   <p className={styles.contentName4}>로그인 정보</p>
   <hr className={styles.line2}  />
    <p className={styles.contentName2}>아이디</p>
      <p className={styles.contentName3}>{userid}</p>
<br/><br/>
      <p className={styles.contentName4}>개인 정보</p>
      <hr className={styles.line2}  />
      <p className={styles.contentName2}>이름</p>
      <p className={styles.contentName3}>{username}</p>
      <hr className={styles.line3}  />  <br/>
      <p className={styles.contentName2}>이메일</p>
      <p className={styles.contentName3}>{useremail}</p>
      <hr className={styles.line3}  /><br/>
      <p className={styles.contentName2}>전화번호</p>
      <p className={styles.contentName3}>{userphonenumber}</p>
      <hr className={styles.line3}  /><br/>
      <p className={styles.contentName2}>주소</p>
      <p className={styles.contentName3}>{useraddress}</p>
      <hr className={styles.line3}  />
    </>
  )

}