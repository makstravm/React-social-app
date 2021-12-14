import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { } from './components/Profile/MyPosts/MyPostsContainer';
import { Profile } from './components/Profile/Profile';
import { StoreType } from './redux/store';

type AppPropsType = {
    store: StoreType
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
                                profilPage={props.store.getState().profilePage}
                                dispatch={props.store.dispatch.bind(props.store)}
                            />} />
                            <Route path='/dialogs' render={() => <DialogsContainer
                                dialogPage={props.store.getState().dialogPage}
                                dispatch={props.store.dispatch.bind(props.store)} />} />
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter >
    );
}

export default App;
