import { combineReducers, createStore } from "redux";
import { errors } from "./reducers/error";
import { results } from "./reducers/results";
import { user } from "./reducers/user";

const rootReducer = combineReducers({
    users: user,
    results: results,
    errors: errors
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store
