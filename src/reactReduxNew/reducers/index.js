import { combineReducers } from "redux";
import todos from "./todo.reducers";
import filterTodo from "./filter.reducers";

export default combineReducers({
  todos,
  filterTodo
});