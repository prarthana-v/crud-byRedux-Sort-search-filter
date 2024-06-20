import { combineReducers } from "redux";
import CrudReducer from "./CrudReducer";

const rootReducers = combineReducers({
  crud: CrudReducer,
});

export default rootReducers;
