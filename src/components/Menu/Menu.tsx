import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Menu.module.css';


export function Menu() {
  return (
    <nav className={style.menu}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink className={style.link} to='/profile' activeClassName={style.active}>Profile</NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} to='/dialogs' activeClassName={style.active}>Messagers</NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} to='/news' activeClassName={style.active}>News</NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} to='/music' activeClassName={style.active}>Music</NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} to='/setings' activeClassName={style.active}>Settings</NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} to='/friends' activeClassName={style.active}>Friends</NavLink>
          <div>
            <div>15</div>
            <div>25</div>
            <div>35</div>
            <div>45</div>
            <div>55</div>
          </div>
        </li>
      </ul>
    </nav>
  )
}