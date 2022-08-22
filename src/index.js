import store from "./redux/state";
import {rerenderEntireTree} from "./App";

rerenderEntireTree( store.getState(), store.addPost.bind(store), store.updateNewPostText.bind(store) )

store.subscriber( rerenderEntireTree )