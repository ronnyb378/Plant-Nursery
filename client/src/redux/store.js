import { combineReducers, createStore } from "redux";
import { results } from "./reducers/results";
import { user } from "./reducers/user";

const rootReducer = combineReducers({
    users: user,
    results: results
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store
