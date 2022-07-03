import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
// 각 리듀서를 합치기
const reducer = combineReducers({
  todos,
  filter,
});

export default reducer;
