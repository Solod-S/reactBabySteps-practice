import React, { useState, useEffect } from "react";
import styles from './SignupForm.module.css'
import { useLocalStorage } from "./useLocalStorage";


export default function SignupFormHook ()  {
  const [email, setEmail] = useLocalStorage("email" ,'')
     
    const [password, setPass] = useLocalStorage("password" ,'')
   
// const [email, setEmail] = useState(() => {
// console.log(`Делаем начальное состояние для email useState`);
//  return JSON.parse(window.localStorage.getItem('email' )) ?? ''})

// const [password, setPass] = useState(() => {
//   console.log(`Делаем начальное состояние для email useState`);
//   return JSON.parse(window.localStorage.getItem('password' )) ?? ''})

// useEffect(()=> {
//   console.log(`LocalStorage for Email`)
//   window.localStorage.setItem(`email`, JSON.stringify(email))
// }, [email])
// useEffect(()=> {
//   console.log(`LocalStorage for Password`)
//   window.localStorage.setItem(`password`, JSON.stringify(password))
// }, [password])
const handleChange = event => {
 
    switch (event.target.name) {
        case "email":
            setEmail(event.target.value)
            break;
        case "password":
            setPass(event.target.value)
            break;
        default:
            break;
    }

}
    return ( <form className={styles.form} autoComplete="off">
    <label className={styles.label}>
      <span>Почта</span>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={email}
      />
    </label>
    <label className={styles.label}>
  <span>Пароль</span>
  <input
    type="password"
    name="password"
    onChange={handleChange}
    value={password}
  />
</label>


    <button type="submit">Зарегистрироваться</button>
  </form>) 

}