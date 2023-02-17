import { load } from "./loader";
import { combineReducers } from "redux";




const reducers = combineReducers({

    loader : load
});

export default reducers;