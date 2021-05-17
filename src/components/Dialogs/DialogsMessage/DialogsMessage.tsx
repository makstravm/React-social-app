import React from 'react';
import { messageDataPropsType } from '../../../redux/state';
import style from '../Dialogs.module.css'


type DialogsMessagePropsType = {
  message: Array<messageDataPropsType>
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
