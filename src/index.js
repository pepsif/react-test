import store from "./redux/state";
import {rerenderEntireTree} from "./App";

rerenderEntireTree( store.getState(),  store.dispatch)

store.subscribe( rerenderEntireTree )