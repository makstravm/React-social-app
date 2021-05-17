import React from 'react';
import { DialogsType } from '../../redux/state';
import style from './Dialogs.module.css'
import { DialogsItem } from './DialogsItem/DialogsItem';
import { DialogsMessage } from './DialogsMessage/DialogsMessage';

type DialogsPropsType = {
  dialogPage: DialogsType
}

export function Dialogs(props: DialogsPropsType) {
  return (
    <div className={style.dialogs}>
      <DialogsItem dialogData={props.dialogPage.dialogData} />
      <DialogsMessage message={props.dialogPage.messageData} />
    </div>
  )
}