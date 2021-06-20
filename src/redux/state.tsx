import { v1 } from "uuid"
import { dialogsReducer, SendMessageyAC, UpdateNewMessageBodyAC } from "./dialogs-reducer copy"
import { addPostAC, profileReducer, UpdateNewPostTextAC } from "./profile-reducer"

export type StoreType = {
  _state: StateRootType
  _callSubScriber: () => void

  subscribe: (observer: () => void) => void
  getState: () => StateRootType
  dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof UpdateNewPostTextAC> | ReturnType<typeof UpdateNewMessageBodyAC> | ReturnType<typeof SendMessageyAC>

export type PostDataType = {
  id: string
  avatar: string
  post: string
  likes: number
}
export type DialogDataType = {
  name: string
  id: string
}
export type MessageDataType = {
  message: string
  id: string
}
export type ProfileType = {
  postsData: Array<PostDataType>
  newPost: string

}
export type DialogsType = {
  dialogData: Array<DialogDataType>
  messageData: Array<MessageDataType>
  newMessageText: string
}
export type StateRootType = {
  profilePage: ProfileType
  dialogPage: DialogsType

}




const store: StoreType = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: v1(),
          avatar: 'https://i.redd.it/riuuew03o6p11.jpg',
          post: 'Either I will find a way, or I will make one.',
          likes: 43
        },
        {
          id: v1(),
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUt45KAXsw3OIqBECO_b_3X0EOOjqKD87ag&usqp=CAU',
          post: 'Live for yourself',
          likes: 143
        },
        {
          id: v1(),
          avatar: 'https://w7.pngwing.com/pngs/449/937/png-transparent-world-of-warcraft-draenei-chibi-art-drawing-world-of-warcraft-game-mammal-chibi-thumbnail.png',
          post: 'You are your only limit',
          likes: 99
        }
      ],
      newPost: ''
    },
    dialogPage: {
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
  },
  _callSubScriber() { },
  subscribe(observer: () => void) {
    this._callSubScriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._callSubScriber()
  }
}




export default store


