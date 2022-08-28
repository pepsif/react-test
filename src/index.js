import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = ( ) => {
    root.render(
        <BrowserRouter>
            <App store={ store } dispatch={ store.dispatch.bind(store) }/>
        </BrowserRouter>
    )
}

rerenderEntireTree( store.getState() )
//
store.setRenderListener( rerenderEntireTree )