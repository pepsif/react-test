import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import UserCard from "./components/User card/User card";
import Dialogs from "./components/Dialogs/Dialogs";
import Posts from "./components/Posts/Posts";
const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = ( store ) => {
    // debugger
    root.render(
        <BrowserRouter>
            <div className="main_content">
                <Header/>
                <Aside/>
                <Routes>
                    <Route path="/profile" element={<UserCard/>}/>
                    <Route path="/dialogs" element={<Dialogs state={store._state}/>}/>
                    <Route path="/posts" element={<Posts state={store._state} addPost={store.addPost} updatePostText={store.updateNewPostText} />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}