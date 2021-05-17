import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { } from './components/Profile/MyPosts/MyPosts';
import { Profile } from './components/Profile/Profile';
import { StateType } from './redux/state';


type AppPropsType = {
  appState: StateType
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="container">
          <Header />
          <div className="content">
            <Menu />
            <div className="content-inner">
              <Route path='/profile' render={() => <Profile
                profilPage={props.appState.profilePage} />} />
              <Route path='/dialogs' render={() => <Dialogs dialogPage={props.appState.dialogPage} />} />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
