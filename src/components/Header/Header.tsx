import React from 'react';
import style from './Header.module.css';


export function Header() {
  return (
    <div className={style.header}>
      <div className={style.inner}>
        <a className={style.logo} href="#" >
          <img src="https://cdn.freelogovectors.net/wp-content/uploads/2020/10/nike-just-do-it-logo.png" alt="logo" />
        </a>
        <div className={style.social}>
          <a className={style.link} href="#" > Register</a>
          <a className={style.link} href="#" > Log in</a>
        </div>
      </div>
    </div>
  )
}
