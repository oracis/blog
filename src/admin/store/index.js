import { createStore, combineReducers } from "redux";
import homeManagementReducer from "./reducer/homeManagementReducer";

const reducers = combineReducers({
    homeManagement: homeManagementReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
