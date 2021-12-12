import { combineReducers, createStore } from "redux"
import { dialogsReducer } from "./dialogs-reducer"
import { profileReducer, StoreType } from "./profile-reducer"


export type AppStateType = ReturnType<typeof reducers>

const reducers= combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
})

const store: StoreType = createStore(reducers)

export default store