import './index.css'
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import UserCard from "./components/User card/User card";
import Dialogs from "./components/Dialogs/Dialogs";
import Posts from "./components/Posts/Posts";


export let App = ( store ) => {
    // debugger
    return(
            <div className="main_content">
                <Header />
                <Aside />
                <Routes>
                    <Route path="/profile" element={<UserCard/>}/>
                    <Route path="/dialogs" element={<Dialogs state={store.store._state.dialogsPage}/>}/>
                    <Route path="/posts" element={<Posts state={store.store._state.postsPage} dispatch={store.dispatch.bind(store)}/>}/>
                </Routes>
            </div>
        )
   }