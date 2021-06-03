import React from 'react';
import { PostDataType, ProfileType } from '../../../redux/state';
import { Post } from './Post/Post';


type MyPostsPropsType = {
  postsData: Array<PostDataType>
  newPost: string
  addPost: (post: string) => void
  updateNewPostText: (newPost: string) => void
}

export function MyPosts(props: MyPostsPropsType) {
  return (
    <div >
      <Post
        postsData={props.postsData}
        newPost={props.newPost}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  )
}