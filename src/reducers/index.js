import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import tabReducer from "./tabReducer";

export default combineReducers({
  students: studentReducer,
  tab: tabReducer
});
