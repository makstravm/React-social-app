import React from 'react';
import style from './Profile-top.module.css';

export function ProfileTop() {
  return (
    <div className={style.profile}>
      <div className={style.top}>
        <img src="https://wikiway.com/upload/iblock/3ac/Fleshmob-YA-Lyublyu-KHarkov.jpg" alt="profile image" />
      </div>
    </div>
  )
}