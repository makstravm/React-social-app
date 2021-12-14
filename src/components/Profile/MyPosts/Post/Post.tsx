import React from 'react';
import { addPostAC, UpdateNewPostTextAC } from '../../../../redux/profile-reducer';
import { ActionsTypes, PostDataType } from '../../../../redux/store';
import style from './Post.module.css';

type PostTypeProps = {
    postsData: Array<PostDataType>
    newPost: string
    updateNewPostText: (value:string) => void
    addPostMessege : (text: string) => void
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

    const onChangePostHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    const addPostMessege = () => {
        const correctSpaceNewPost = props.newPost.trim()
        if (correctSpaceNewPost) {
            props.addPostMessege (props.newPost)
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
                    onChange={onChangePostHandler}
                    value={props.newPost}
                    placeholder='Write your post...'></textarea>
                <button
                    className={style.btn}
                    onClick={addPostMessege}
                >Add Post</button>
            </div>
            {post}
        </div >)
}