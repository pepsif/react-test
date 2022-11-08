import React from "react";
import ReactDOM from "react-dom";
import reduxStore from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
   // debugger
    root.render(
        <BrowserRouter>
           <StoreContext.Provider value={reduxStore}>
               <App/>
           </StoreContext.Provider>

        </BrowserRouter>
    )
}

rerenderEntireTree( reduxStore.getState() )

reduxStore.subscribe( rerenderEntireTree )