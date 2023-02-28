import { load } from "./loader";
import { role } from './role';
import { login } from './login';
import { tags } from "./tags";


const { combineReducers } = require("redux");

const reducers = combineReducers({
    loader : load,
    role : role,
    login : login,
    tags : tags

});

export default reducers;