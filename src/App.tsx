import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { } from './components/Profile/MyPosts/MyPostsContainer';
import { Profile } from './components/Profile/Profile';
import { StoreType } from './redux/profile-reducer';
import store from './redux/redux-store';

type AppPropsType = {
    store: StoreType
}

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className="container">
                    <Header />
                    <div className="content">
                        <Menu />
                        <div className="content-inner">
                            <Route path='/profile' render={() => <Profile store={store}/>} />
                            <Route path='/dialogs' render={() => <DialogsContainer store={store} />} />
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter >
    );
}

export default App;
