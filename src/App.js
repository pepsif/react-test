import './index.css';
import {Route, Routes} from "react-router-dom";
import Aside from "./components/Aside/Aside";
import Dialogs from "./components/Dialogs/Dialogs";
import Posts from "./components/Posts/Posts";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/User card/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


export let App = () => {
      return(
            <div className="main_content">
                <HeaderContainer />
                <Aside />
                <Routes>
                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                    <Route path="/profile" element={<ProfileContainer/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/settings" element={<h2>settings</h2>}/>
                </Routes>
            </div>
        )
   }