import {createStore,applyMiddleware,compose, legacy_createStore,combineReducers} from "redux";
import thunk from "redux-thunk";
import reducer from "./postReducer/reducer";

const store = legacy_createStore(reducer,compose(applyMiddleware(thunk)));

export default store;