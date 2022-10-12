import { createStore } from "redux";
import { combineReducers } from "redux";
import todoSetter from "../modules/todo";

const rootReducer = combineReducers({
    todoSetter: todoSetter,
});
const store = createStore(rootReducer);

export default store;