import React from 'react';
import { ActionsTypes, DialogsType } from '../../redux/store';
import style from './Dialogs.module.css'
import { DialogsItem } from './DialogsItem/DialogsItem';
import { DialogsMessage } from './DialogsMessage/DialogsMessage';

type DialogsPropsType = {
  dialogPage: DialogsType
  dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: DialogsPropsType) {
  return (
    <div className={style.dialogs}>
      <DialogsItem dialogData={props.dialogPage.dialogData} />
      <DialogsMessage message={props.dialogPage.messageData}
      newMessage={props.dialogPage.newMessageText} 
      dispatch={props.dispatch}/>
    </div>
  )
}