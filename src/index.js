import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
   // debugger
    root.render(
        <BrowserRouter>
            <App store={ store.getState() } dispatch={ store.dispatch.bind(store)} />
        </BrowserRouter>
    )
}
// console.log(store.getState())
rerenderEntireTree( store.getState() )
//
store.subscribe( rerenderEntireTree )