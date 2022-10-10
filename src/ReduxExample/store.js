import reducer, { initialState } from "./reducer";
import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

const allReducers=combineReducers({
    count: reducer,
})

const store=createStore(
    allReducers,initialState, composeWithDevTools()
)
export default store;