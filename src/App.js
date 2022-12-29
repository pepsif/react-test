import './index.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import UserCard from "./components/User card/User card";
import Dialogs from "./components/Dialogs/Dialogs";
import Posts from "./components/Posts/Posts";
import UsersContainer from "./components/Users/UsersContainer";


export let App = () => {
      return(
            <div className="main_content">
                <Header />
                <Aside />
                <Routes>
                    <Route path="/profile" element={<UserCard/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/settings" element={<h2>settings</h2>}/>
                </Routes>
            </div>
        )
   }