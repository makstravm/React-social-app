import { combineReducers, createStore } from "redux"
import { dialogsReducer } from "./dialogs-reducer"
import { profileReducer, StoreType } from "./profile-reducer"


// export type AppStateType = ReturnType<typeof reducers>


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
})
// @ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// @ts-ignore
// type RootReducerType = typeof reducers
// export type AppStateType = ReturnType<RootReducerType>
const store: StoreType = createStore(reducers)

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// window.store = store

export default store