import { load } from "./loader";
import { combineReducers } from "redux";
import { role } from './role';
import { login } from './login';




const reducers = combineReducers({

    loader : load,
    role : role,
    login : login
});

export default reducers;