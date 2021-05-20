import React from 'react';
import { PostDataType } from '../../../redux/state';
import { Post } from './Post/Post';


type MyPostsPropsType = {
  postsData: Array<PostDataType>
  addPost: (post: string) => void
}

export function MyPosts(props: MyPostsPropsType) {
  return (
    <div >
      <Post
        postsData={props.postsData}
        addPost={props.addPost}
      />
    </div>
  )
}