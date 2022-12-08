import React, {useState} from 'react'
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
<form>
            <div><input name="id" type="id" placeholder="아이디" value={id} onChange={onIdHandler} class="loginregister__input"/></div>
            <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
            <div><button type="submit" onSubmit={onSubmit} class="loginregister__button">로그인</button></div>

</form>


</div>



);
}
export default Login;