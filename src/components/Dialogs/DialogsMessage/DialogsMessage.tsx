import React from 'react';
import { MessageDataType } from '../../../redux/state';
import style from '../Dialogs.module.css'


type DialogsMessagePropsType = {
  message: Array<MessageDataType>
}

export const DialogsMessage = (props: DialogsMessagePropsType) => {
  const message = props.message.map(m => {
    return <div className={style.message}>
      {m.message}
    </div>
  })
  return (
    <div className={style.messages}>
      {message}
    </div>
  )
}
