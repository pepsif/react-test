import './index.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import UserCard from "./components/User card/User card";
import Dialogs from "./components/Dialogs/Dialogs";
import Posts from "./components/Posts/Posts";
// import reduxStore from "./redux/redux-store";


export let App = ( props ) => {
    // debugger
    // console.log(props)
    return(
            <div className="main_content">
                <Header />
                <Aside />
                <Routes>
                    <Route path="/profile" element={<UserCard/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    {/*<Route path="/posts" element={<Posts/>}/>*/}
                </Routes>
            </div>
        )
   }