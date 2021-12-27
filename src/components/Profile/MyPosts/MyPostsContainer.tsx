import React from 'react';
import { addPostAC, StoreType, UpdateNewPostTextAC } from '../../../redux/profile-reducer';
import { ActionsTypes, PostDataType } from '../../../redux/store';
import { Post } from './Post/Post';

type PostContainerTypeProps = {
    store: StoreType
}

export function MyPostContainer(props: PostContainerTypeProps) {
    const { newPost, postsData } = props.store.getState().profilePage
    // dispatch = { props.store.dispatch.bind(props.store) }
    const updateNewPostText = (value: string) => props.store.dispatch(UpdateNewPostTextAC(value))

    const addPostMessege = () => props.store.dispatch(addPostAC(newPost))

    return (
        <Post
            updateNewPostText={updateNewPostText}
            addPostMessege={addPostMessege}
            postsData={postsData}
            newPost={newPost}
        />)
}