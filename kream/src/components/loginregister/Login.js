import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./login.module.css"
import { useNavigate } from 'react-router-dom';




const Login = () => {
  const [userid, setId] = useState("");
  const [userpassword, setPassword] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const sessionStorage = window.sessionStorage;

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  }


  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    console.log(userid);
    console.log(userpassword);
    event.preventDefault();
    fetch("/api/login", {

      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"

      },
      body: JSON.stringify({
        "id": userid,
        "pw": userpassword
      })

    })
      .then((res) => res.json())
      .then(data => {
        console.log(data);

        if (data.user.length !== 0) {
          console.log('sucessss');
          sessionStorage.setItem("loginId", data.user[0].userid);
          console.log('되냐?' + sessionStorage.getItem("loginId"));
          window.location.href = document.referrer;
        }
        else if (data.user.length === 0) {
          console.log('not sucessss');
          return alert('로그인 실패! 아이디와 비밀번호를 확인하세요')
        };
      });

  }

  return (
    <div className={styles.loginregister}>
      <div >
        <br /><br />
        <div className={styles.box}>
          <div className={styles.logo}>
            <Link to="/">
              <img className={styles.logoSize} src="/images/logo2.jpg" alt="logo" />
            </Link>
          </div><br /><br />
          <h2 className={styles.register}>LOGIN</h2><br />
          <form onSubmit={onSubmit}>
            <div className={styles.size}>
              <p className={styles.gulza}><font color="red" className={styles.point}>*</font>ID</p>
              <input name="userid" type="id" placeholder="아이디" value={userid} onChange={onIdHandler} className={styles.loginregister__input} required />
            </div><br />
            <div className={styles.size}>
              <h6 className={styles.gulza}><font color="red" className={styles.point}>*</font>PASSWORD</h6>
              <input name="userpassword" type="password" placeholder="비밀번호" value={userpassword} onChange={onPasswordHandler} className={styles.loginregister__input} required/>
            </div><br />
            <div>
              <button type="submit" className={styles.loginregister__button}>로그인</button></div>
          </form><br />
          <div className={styles.registerCheck}>
            <Link to={`/register`}>
              - 아직 Whipping 회원이 아니신가요?
              <button className={styles.loginregister__button2}>회원가입!</button> -
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}
export default Login;