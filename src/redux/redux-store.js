import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";
import {composeWithDevTools} from '@redux-devtools/extension';
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    postsPage: postsReducer,
    dialogsPage: messagesReducer,
    usersPage: usersReducer
})


let store = createStore(reducers, composeWithDevTools(
    applyMiddleware()
));

export default store