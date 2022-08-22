import store from "./redux/state";
import {rerenderEntireTree} from "./App";

rerenderEntireTree( store )

store.subscriber( rerenderEntireTree )