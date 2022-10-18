import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";
import { composeWithDevTools } from '@redux-devtools/extension';



let reducers = combineReducers({
    postsPage : postsReducer,
    dialogsPage: messagesReducer
    })


let store = createStore(reducers, composeWithDevTools(
    applyMiddleware()
    // other reduxStore enhancers if any
));
// debugger
export default store