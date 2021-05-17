export type PostDataType = {
  id: number
  avatar: string,
  post: string
}
export type dialogDataPropsType = {
  name: string
  id: number
}
export type messageDataPropsType = {
  message: string
  id: number
}
export type ProfileType = {
  postsData: Array<PostDataType>
}
export type DialogsType = {
  dialogData: Array<dialogDataPropsType>
  messageData: Array<messageDataPropsType>
}
export type StateType = {
  profilePage: ProfileType
  dialogPage: DialogsType

}

const state: StateType = {
  profilePage: {
    postsData: [
      {
        id: 1,
        avatar: 'https://i.redd.it/riuuew03o6p11.jpg',
        post: 'Either I will find a way, or I will make one.'
      },
      {
        id: 2,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUt45KAXsw3OIqBECO_b_3X0EOOjqKD87ag&usqp=CAU',
        post: 'Live for yourself'
      },
      {
        id: 3,
        avatar: 'https://w7.pngwing.com/pngs/449/937/png-transparent-world-of-warcraft-draenei-chibi-art-drawing-world-of-warcraft-game-mammal-chibi-thumbnail.png',
        post: 'You are your only limit'
      }
    ],
  },
  dialogPage: {
    dialogData: [
      { id: 1, name: 'Viktoria' },
      { id: 2, name: 'Maks' },
      { id: 3, name: 'Bob' },
      { id: 4, name: 'John' },
      { id: 5, name: 'Alexey' },
      { id: 6, name: 'Vladimir' }
    ],
    messageData: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'Hi. How are you?' },
      { id: 3, message: 'Oh. Great. And you?' },
      { id: 4, message: 'I am funny, thank you' }
    ]
  }

}
export default state