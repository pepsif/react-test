import './index.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Profile from "./components/User card/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Posts from "./components/Posts/Posts";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/User card/ProfileContainer";


export let App = () => {
      return(
            <div className="main_content">
                <Header />
                <Aside />
                <Routes>
                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/settings" element={<h2>settings</h2>}/>
                </Routes>
            </div>
        )
   }