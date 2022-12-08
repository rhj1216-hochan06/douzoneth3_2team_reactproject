import React, {useState} from 'react'
import "./loginregister.css"
import { Link } from 'react-router-dom';

const Register=()=> {
  const [name, setName] = useState("")
  const [id, setId] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }
  const onIdHandler = (event) => {
    setId(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if(password !== confirmPassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
    }
  }

  return (
    <div class="loginregister"  >
    <div  >

<div className="logo">
            <Link to="/">
              <img className="logoSize" src="/images/logo.jpg" alt="logo" />
            </Link>
          </div>

      <form onSubmit={onSubmit}>
          <div><div className='gulza'>NAME</div><input name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} class="loginregister__input"/></div>
          <div><div className='gulza'>EMAIL</div><input name="email" type="email" placeholder="이메일" value={id} onChange={onIdHandler} class="loginregister__input"/></div>
          <div><div className='gulza'>PASSWORD</div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
          <div><div className='gulza'>PASSWORD CONFIRM</div><input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} class="loginregister__input"/></div>
          <div><button type="submit" class="loginregister__button">계정 생성하기</button></div>
      </form>
    </div>
    
    </div>
  );
}
export default Register;