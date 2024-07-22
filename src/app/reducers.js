import { combineReducers } from "redux";
import userReducer from "../features/userSlice";  

export const rootReducer = combineReducers({
    user: userReducer,
});
