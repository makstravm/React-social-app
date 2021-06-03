import { v1 } from "uuid"

let rerenderTree = () => {}

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
}
export type StateRootType = {
  profilePage: ProfileType
  dialogPage: DialogsType

}

const state: StateRootType = {
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
    ]
  }
}


export const addPost = (post: string) => {
  const newPost: PostDataType = {
    id: v1(),
    avatar: ' Your photo',
    post,
    likes: 0
  }
  state.profilePage.postsData.push(newPost)
  rerenderTree();
}
export const updateNewPostText = (newPost: string) => {
  debugger
  state.profilePage.newPost = newPost
  rerenderTree();
}

export const subscribe = (observer: () => void) => {
  rerenderTree = observer;
}

export default state

