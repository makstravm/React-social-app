import React from 'react';
import { SendMessageyAC, UpdateNewMessageBodyAC } from '../../redux/dialogs-reducer';
import { ActionsTypes, DialogsType } from '../../redux/store';
import style from './Dialogs.module.css'
import { DialogsItem } from './DialogsItem/DialogsItem';
import { DialogsMessage } from './DialogsMessage/DialogsMessage';

type DialogsPropsType = {
    dialogPage: DialogsType
    dispatch: (action: ActionsTypes) => void
}

export function DialogsContainer(props: DialogsPropsType) {

    const onNewMessageChange = (value:string) => props.dispatch(UpdateNewMessageBodyAC(value))

    const sendMessageyAC = (value:string) => props.dispatch(SendMessageyAC(value))

    return (
        <div className={style.dialogs}>
            <DialogsItem dialogData={props.dialogPage.dialogData} />
            <DialogsMessage
                message={props.dialogPage.messageData}
                newMessage={props.dialogPage.newMessageText}
                onNewMessageChange={onNewMessageChange}
                sendMessageyAC={sendMessageyAC} />
        </div>
    )
}