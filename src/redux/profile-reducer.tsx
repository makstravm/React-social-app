import { v1 } from "uuid"
import { ActionsTypes, PostDataType, ProfileType, StateRootType } from "./store"

export type StoreType = {
  _state: StateRootType
  _callSubScriber: () => void
  subscribe: (observer: () => void) => void
  getState: () => StateRootType
  dispatch: (action: ActionsTypes) => void
}
export const addPostAC = (post: string) => {
  return {
    type: 'ADD-POST',
    post: post
  } as const
}
export const UpdateNewPostTextAC = (newPost: string) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newPost: newPost
  } as const
}

const initialState: ProfileType = {
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
}

export const profileReducer = (state: ProfileType = initialState, action: ActionsTypes): ProfileType => {
  switch (action.type) {
    case 'ADD-POST':
      const newPost: PostDataType = {
        id: v1(),
        avatar: 'https://www.dexerto.com/wp-content/uploads/2021/04/29/tracer-overwatch-concerned.jpg',
        post: action.post,
        likes: 0
      }
      state.postsData.push(newPost)
      state.newPost = ''
      return state
    case 'UPDATE-NEW-POST-TEXT':

      state.newPost = action.newPost
      return state
    default:
      return state
  }
}