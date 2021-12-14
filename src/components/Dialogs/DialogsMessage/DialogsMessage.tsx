import React from 'react';

import { MessageDataType } from '../../../redux/store';
import style from '../Dialogs.module.css'


type DialogsMessagePropsType = {
    message: Array<MessageDataType>
    newMessage: string
    onNewMessageChange: (value: string) => void
    sendMessageyAC: (value: string) => void
}

export const DialogsMessage = (props: DialogsMessagePropsType) => {
    const message = props.message.map(m => {
        return <div key={m.id} className={style.message}>
            {m.message}
        </div>
    })
    const onSendMessageClick = () => {
        const correctSpaceNewPost = props.newMessage.trim()
        if (correctSpaceNewPost) {
            props.sendMessageyAC(props.newMessage)
        }
    }
    const onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewMessageChange(e.currentTarget.value)
    }
    const sendMessageKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            onSendMessageClick()
        }
    }
    return (<div>
        < div className={style.messages}>
            {message}
        </div>
        <div>
            <textarea
                placeholder='Enter your message'
                value={props.newMessage}
                onChange={onNewMessageChange}
                onKeyPress={sendMessageKeyPress}
            ></textarea>
            <button
                onClick={onSendMessageClick}>SEND</button>
        </div>
    </div>
    )
}
