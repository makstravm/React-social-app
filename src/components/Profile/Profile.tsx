import { type } from 'node:os';
import React, { Profiler } from 'react';
import { ProfileType } from '../../redux/state';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileTop } from './Profile-top/Profile-top';
import style from './Profile.module.css';

type ProfilePropsType = {
  profilPage: ProfileType
  addPost: (post: string) => void
}

export function Profile(props: ProfilePropsType) {
  return (
    <div className={style.profile} >
      <ProfileTop />
      <div className={style.content}>
        <div className={style.inner}>
          <div className={style.avatar}>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f81dce0-ac68-4e9f-97e9-fb25a0e03e3e/d1uebpu-a14c9f16-52ed-46e1-b488-05f6f3bf5aa2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2Y4MWRjZTAtYWM2OC00ZTlmLTk3ZTktZmIyNWEwZTAzZTNlXC9kMXVlYnB1LWExNGM5ZjE2LTUyZWQtNDZlMS1iNDg4LTA1ZjZmM2JmNWFhMi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.dcFCR9y5A3RGFpyIKTWVXWKl43odkBoZfwiu5kX2vR4" alt="avatar image" />
          </div>
          <div className={style.item}>
            <h4 className={style.name}>Maksym Mykulenko</h4>
            <div className={style.birth}>
              <span>Date of Birth: </span><span>7 february</span>
            </div>
            <div className={style.city}>
              <span>City: </span><span>Kharkov</span>
            </div>
            <div className={style.education}>
              <span>Education: </span><span>KHNMU</span>
            </div>
            <div className={style.site}>
              <span>Web-site: </span><a className={style.link} href='https://mykulenko.com.ua'>mykulenko.com.ua</a>
            </div>
          </div>
        </div>
        <MyPosts
          postsData={props.profilPage.postsData}
          addPost={props.addPost}
        />
      </div>
    </div>
  )
}