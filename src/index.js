import React from "react";
import {createRoot} from "react-dom/client";
import reduxStore from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {Provider} from "react-redux";

const container = document.getElementById('root');
const root = createRoot(container);


    root.render(
        <BrowserRouter>
           <Provider store={reduxStore}>
               <App/>
           </Provider>
        </BrowserRouter>
    )

