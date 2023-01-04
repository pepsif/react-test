import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";
import {composeWithDevTools} from '@redux-devtools/extension';
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    postsPage: postsReducer,
    dialogsPage: messagesReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer
})


let store = createStore(reducers, composeWithDevTools(
    applyMiddleware()
));

export default store