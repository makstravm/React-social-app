import React from 'react';
import { addPostAC, UpdateNewPostTextAC } from '../../../redux/profile-reducer';
import { ActionsTypes, PostDataType } from '../../../redux/store';
import { Post } from './Post/Post';

type PostContainerTypeProps = {
    postsData: Array<PostDataType>
    newPost: string
    dispatch: (action: ActionsTypes) => void
}

export function MyPostContainer(props: PostContainerTypeProps) {

    const updateNewPostText = (value: string) => props.dispatch(UpdateNewPostTextAC(value))

    const addPostMessege = () => props.dispatch(addPostAC(props.newPost))

    return (
        <Post
            updateNewPostText={updateNewPostText}
            addPostMessege={addPostMessege}
            postsData={props.postsData}
            newPost={props.newPost}
        />)
}