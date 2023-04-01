import React from 'react';
import style from './Form.module.css';

export default function Form() {
    const [userData, setUserData] = React.useState({
        email:'',
        password: '',
    });
    const [errors, setErrors] =React.useState({  email:'',
    password: '',})

    const handleChange=(e) =>{ setUserData({
        ...userData, [e.target.name]: e.target.value
    
    })}

    const handleKeyDown=()=>{
        
    }

    const handleSubmit=(e)=>{
e.preventDefault();
setUserData({email:'', password:''
    }) ;
    return alert("LOGUEADO")}

  return (
    <div><form onSubmit={handleSubmit} className={style.form} action="">
        <label htmlFor="">email</label>
        <input name='email' type="text" onChange={handleChange}
        value={userData.email}
        onKeyUp={handleKeyDown}/>
        <label htmlFor="">password</label>
        <input name='password' type="text" onChange={handleChange}
        value={userData.password}
        onKeyUp={handleKeyDown}/>
        <button type='submit'>Submit</button>
        </form></div>
  )
  
  }