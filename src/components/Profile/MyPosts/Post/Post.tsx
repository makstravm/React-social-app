import React from 'react';
import { PostDataType } from '../../../../redux/state';
import style from './Post.module.css';

type PostTypeProps = {
  postsData: Array<PostDataType>
  addPost: (post: string) => void
}

export function Post(props: PostTypeProps) {
  const post = props.postsData.map(p => {
    return (
      <div key={p.id}
        className={style.box}>
        <div className={style.avatar}>
          <img src={p.avatar} alt="avatar post" />
        </div>
        <div className={style.text}>
          {p.post}
          <span className={style.likes}>Likes: {p.likes}</span>
        </div>
      </div>
    )
  })
  const postMessegeRef = React.createRef<HTMLTextAreaElement>()

  const addPostMessege = () => {
    if (postMessegeRef.current) {
      props.addPost(postMessegeRef.current.value)
      postMessegeRef.current.value = ''
    }
  }
  const addPostKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      addPostMessege()
    }

  }
  return (
    <div>
      <div className={style.inner}>
        <textarea
          className={style.textarea}
          onKeyPress={addPostKeyPress}
          ref={postMessegeRef}
          placeholder='Write your post...'></textarea>
        <button
          className={style.btn}
          onClick={addPostMessege}
        >Add Post</button>
      </div>
      {post}
    </div>)
}