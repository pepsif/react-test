import {combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";

let reducers = combineReducers({
    postsPage : postsReducer,
    dialogsPage: messagesReducer
    })


let store = createStore( reducers );
// debugger
export default store