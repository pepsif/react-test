import React from "react";
import ReactDOM from "react-dom";
import reduxStore from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
   // debugger
    root.render(
        <BrowserRouter>
            <App store={ reduxStore.getState() } dispatch={ reduxStore.dispatch.bind(reduxStore)} />
        </BrowserRouter>
    )
}
// console.log(reduxStore.getState())
rerenderEntireTree( reduxStore.getState() )
//
reduxStore.subscribe( rerenderEntireTree )