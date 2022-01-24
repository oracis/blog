import { createStore, combineReducers } from "redux";
import commonReducer from "./reducer";

const reducers = combineReducers({
    common: commonReducer
})

const index = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default index;
