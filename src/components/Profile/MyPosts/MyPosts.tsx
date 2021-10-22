import React from 'react';
import { ActionsTypes, PostDataType, } from '../../../redux/store';
import { Post } from './Post/Post';


type MyPostsPropsType = {
  postsData: Array<PostDataType>
  newPost: string
  dispatch: (action: ActionsTypes) => void
}

export function MyPosts(props: MyPostsPropsType) {
  return (
    <div >
      <Post
        postsData={props.postsData}
        newPost={props.newPost}
        dispatch={props.dispatch}
      />
    </div>
  )
}