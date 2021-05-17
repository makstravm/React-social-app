import React from 'react';
import { PostDataType } from '../../../../redux/state';
import style from './Post.module.css';

type PostTypeProps = {
  postsData: Array<PostDataType>
}

export function Post(props: PostTypeProps) {
  const post = props.postsData.map(p => {
    return (
      <div className={style.inner}>
        <div className={style.avatar}>
          <img src={p.avatar} alt="avatar post" />
        </div>
        <div className={style.text}>
          {p.post}
        </div>
      </div>
    )
  })
  return <div>{post}</div>
}