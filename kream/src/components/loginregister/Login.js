import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./loginregister.css"

const Login = () => {
const [id, setId] =useState("");

const [password, setPassword] = useState("");

const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
}

const onSubmit = (event) => {
    event.preventDefault();
    
  }

return(
<div className='loginregister'>
  <div  >
<form onSubmit={onSubmit}> 
            <div><input name="id" type="id" placeholder="아이디" value={id} onChange={onIdHandler} class="loginregister__input"/></div>
            <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
            <div><button type="submit" class="loginregister__button">로그인</button></div>

</form>

<Link to={`/register`}>
       <button  class="loginregister__button" >회원가입</button>
</Link>

</div>
</div>


);
}
export default Login;