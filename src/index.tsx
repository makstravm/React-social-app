
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';


export const rerenderTree = (state:any) => {
debugger
  ReactDOM.render(<App
    store={store}
  />, document.getElementById('root'));
}
rerenderTree(store)
store.subscribe(() => {
  let state = store.getState();
  rerenderTree(state)
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();