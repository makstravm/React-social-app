import { v1 } from "uuid"
import { ActionsTypes, DialogsType } from "./store"


export const UpdateNewMessageBodyAC = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessage: newMessage
    } as const
}
export const SendMessageyAC = (message: string) => {
    return {
        type: 'SEND-MESSAGE',
        message: message
    } as const
}

const initialState = {
    dialogData: [
        { id: v1(), name: 'Viktoria' },
        { id: v1(), name: 'Maks' },
        { id: v1(), name: 'Bob' },
        { id: v1(), name: 'John' },
        { id: v1(), name: 'Alexey' },
        { id: v1(), name: 'Vladimir' }
    ],
    messageData: [
        { id: v1(), message: 'Hi' },
        { id: v1(), message: 'Hi. How are you?' },
        { id: v1(), message: 'Oh. Great. And you?' },
        { id: v1(), message: 'I am funny, thank you' }
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {
                ...state,
                newMessageText: action.newMessage
            }
        case 'SEND-MESSAGE':
            return {
                ...state,
                messageData: [...state.messageData, {
                    id: v1(),
                    message: state.newMessageText
                }],
                newMessageText: ''
            }
        default:
            return state
    }
}