import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { } from './components/Profile/MyPosts/MyPosts';
import { Profile } from './components/Profile/Profile';
import { StoreType } from './redux/state';

type AppPropsType = {
  store: StoreType
}

function App(props: AppPropsType) {
  const state = props.store.getState()
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="container">
          <Header />
          <div className="content">
            <Menu />
            <div className="content-inner">
              <Route path='/profile' render={() => <Profile
                addPost={props.store.addPost.bind(props.store)}
                profilPage={props.store._state.profilePage}
                updateNewPostText={props.store.updateNewPostText.bind(props.store)}
              />} />
              <Route path='/dialogs' render={() => <Dialogs
                dialogPage={props.store._state.dialogPage} />} />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
