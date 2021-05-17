import React from 'react';
import { PostDataType } from '../../../redux/state';
import { Post } from './Post/Post';
import { PostAdd } from './PostAdd/PostAdd';


type MyPostsPropsType = {
  postsData: Array<PostDataType>
}

export function MyPosts(props: MyPostsPropsType) {
  return (
    <div >
      <PostAdd />
      <Post postsData={props.postsData} />
    </div>
  )
}