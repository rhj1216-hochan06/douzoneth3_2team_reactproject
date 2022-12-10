import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./loginregister.css"
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
    fetch("/api/login",{
    
      method: "POST",
      headers: {
        "Content-Type":"application/json; charset=utf-8"

      },
      body: JSON.stringify({
        "id" : userid,
        "pw" : userpassword
      })

    })
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        
      if(data.user.length!=0) {
        console.log('sucessss');
        sessionStorage.setItem("loginId", data.user[0].userid);
        console.log('되냐?'+sessionStorage.getItem("loginId"));
        return navigate('/')
      }
      else if(data.user.length==0){
        console.log('not sucessss');
        return alert('로그인 실패! 아이디와 비밀번호를 확인하세요')};
      });

  }

  return (



    <div className='loginregister'>

<div >

      <div className="logo">
            <Link to="/">
              <img className="logoSize" src="/images/logo.jpg" alt="logo" />
            </Link>
          </div>
       
        <form onSubmit={onSubmit}>
          <div><p className='gulza'>id</p><input name="userid" type="id" placeholder="아이디" value={userid} onChange={onIdHandler} class="loginregister__input" /></div>
          <div><h6 className='gulza'>password</h6><input name="userpassword" type="password" placeholder="비밀번호" value={userpassword} onChange={onPasswordHandler} class="loginregister__input" /></div>
          <div><button type="submit" class="loginregister__button">로그인</button></div>

        </form>

        <Link to={`/register`}>
          <button class="loginregister__button" >회원가입</button>
        </Link>

    </div>

    </div>

  );
}
export default Login;