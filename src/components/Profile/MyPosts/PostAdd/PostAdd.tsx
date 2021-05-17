import React from 'react';
import style from './PostAdd.module.css';


export function PostAdd() {
  return (
      <div className={style.inner}>
        <textarea className={style.textarea} placeholder='Write your post...'></textarea>
        <button className={style.btn}>Add Post</button>
      </div>

  )
}