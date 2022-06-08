import { combineReducers } from "redux";
import appReducer from "./reducer/appReducer";

const reducer = combineReducers({ appReducer });

export default reducer;
