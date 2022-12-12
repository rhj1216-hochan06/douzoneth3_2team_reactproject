import React, {useState} from 'react'
import "./loginregister.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register=()=> {
  const [name, setName] = useState("")
  const [id, setId] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [idcheck, setIdcheck] = useState(0)
  const navigate = useNavigate();
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

  const onPhonenumberHandler = (event) => {
    setPhonenumber(event.currentTarget.value)
}

const onAddressHandler = (event) => {
  setAddress(event.currentTarget.value)
}

const onEmailHandler = (event) => {
  setEmail(event.currentTarget.value)
}
const onIdcheck = (event) =>{
  event.preventDefault()
  fetch("/api/idcheck",{
    
    method: "POST",
    headers: {
      "Content-Type":"application/json; charset=utf-8"

    },
    body: JSON.stringify({
      "id" : id,
    })

  })
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      
    if(data.user.length!==0) {
     
      console.log('아이디확인실패');
      return alert('중복 아이디 입니다. 다시 입력하세요');
      
    }
    else if(data.user.length===0){
      console.log('아이디중복확인 sucessss');
      setIdcheck(1);
      return alert('사용가능한 아이디 입니다.');
      
      };
    });
}


  const onSubmit = (event) => {
    event.preventDefault()
    
    if(password !== confirmPassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
    }else{ 
      if(idcheck===0){
        return alert('아이디 중복확인이 필요합니다')
      } else{
      fetch("/api/register",{
    
        method: "POST",
        headers: {
          "Content-Type":"application/json; charset=utf-8"
        },
        body: JSON.stringify({
          "userid" : id,
          "username" : name,
          "userpw" :password
        })
  
      })
        .then((res) => res.json())
        .then(data => {
          console.log(data);
          
        if(data.user.length!=0) {
          console.log('reg sucessss');
          return navigate('/')
        }
        else if(data.user.length==0){
          console.log('not sucessss');
          return alert('미작성한 항목 확인하세요')};
        });
      }
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
          <div><div className='gulza'>ID</div><input name="id" type="id" placeholder="아이디" value={id} onChange={onIdHandler} class="loginregister__input2"/><button type="button" class="loginregister__button2" onClick={onIdcheck}>중복확인</button></div>
          
          <div><div className='gulza'>PASSWORD</div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
          <div><div className='gulza'>PASSWORD CONFIRM</div><input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} class="loginregister__input"/></div>
          <div><div className='gulza'>EMAIL</div><input name="email" type="email" placeholder="이메일주소" value={email} onChange={onEmailHandler} class="loginregister__input"/></div>
          <div><div className='gulza'>PHONENUMBER</div><input name="phonenumber" type="text" placeholder="전화번호" value={phonenumber} onChange={onPhonenumberHandler} class="loginregister__input"/></div>
          <div><div className='gulza'>Address</div><input name="address" type="text" placeholder="주소" value={address} onChange={onAddressHandler} class="loginregister__input"/></div>
          <div><button type="submit" class="loginregister__button">계정 생성하기</button></div>
      </form>
    </div>
    
    </div>
  );
}
export default Register;