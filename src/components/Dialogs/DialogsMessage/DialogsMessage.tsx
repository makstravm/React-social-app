import React from 'react';
import { ActionsTypes, MessageDataType, SendMessageyAC, UpdateNewMessageBodyAC } from '../../../redux/state';
import style from '../Dialogs.module.css'


type DialogsMessagePropsType = {
  message: Array<MessageDataType>
  newMessage: string
  dispatch: (action: ActionsTypes) => void
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
      props.dispatch(SendMessageyAC(props.newMessage))
    }
  }
  const onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(UpdateNewMessageBodyAC(e.currentTarget.value))
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
