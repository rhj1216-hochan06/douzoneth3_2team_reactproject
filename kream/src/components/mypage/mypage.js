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
    <><h3> mypage</h3>
   
      <p>{username}</p>
      <p>{userid}</p>
      <p>{useremail}</p>
      <p>{userphonenumber}</p>
      <p>{useraddress}</p>
    </>
  )

}