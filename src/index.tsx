
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';


export const rerenderTree = () => {
    // console.log(store.getState());
    ReactDOM.render(<App
    
    />, document.getElementById('root'));
}
rerenderTree()
store.subscribe(() => {
    // let state = store.getState();
    rerenderTree()
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();