import React from "react";
import ReactDOM from "react-dom";
import reduxStore from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
   // debugger
    root.render(
        <BrowserRouter>
           <Provider value={reduxStore}>
               <App/>
           </Provider>

        </BrowserRouter>
    )
}

rerenderEntireTree( reduxStore.getState() )

reduxStore.subscribe( rerenderEntireTree )