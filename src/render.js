import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import UserCard from "./components/User card/User card";
import Dialogs from "./components/Dialogs/Dialogs";
import Posts from "./components/Posts/Posts";


export const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = ( state, addPost, updateNewPostText ) => {
    // debugger
    root.render(
        <BrowserRouter>
            <div className="main_content">
                <Header/>
                <Aside/>
                <Routes>
                    <Route path="/profile" element={<UserCard/>}/>
                    <Route path="/dialogs" element={<Dialogs state={state}/>}/>
                    <Route path="/posts" element={<Posts state={state} addPost={ addPost } updateNewPostText={ updateNewPostText }/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

// rerenderEntireTree()