import React from 'react';
import { connect } from 'react-redux';
import { SendMessageyAC, UpdateNewMessageBodyAC } from '../../redux/dialogs-reducer';
import { StoreType } from '../../redux/store';
import style from './Dialogs.module.css'
import { DialogsItem } from './DialogsItem/DialogsItem';
import { DialogsMessage } from './DialogsMessage/DialogsMessage';

type DialogsPropsType = {

    store: StoreType
}

export function DialogsContainer(props: DialogsPropsType) {
    const { dialogData, messageData, newMessageText } = props.store.getState().dialogPage

    const onNewMessageChange = (value: string) => props.store.dispatch(UpdateNewMessageBodyAC(value))

    const sendMessageyAC = (value: string) => props.store.dispatch(SendMessageyAC(value))

    return (
        <div className={style.dialogs}>
            <DialogsItem dialogData={dialogData} />
            <DialogsMessage
                message={messageData}
                newMessage={newMessageText}
                onNewMessageChange={onNewMessageChange}
                sendMessageyAC={sendMessageyAC} />
        </div>
    )
}
