import { combineReducers, createStore } from "redux";
import { status } from "./reducers/status";
import { results } from "./reducers/results";
import { user } from "./reducers/user";

const rootReducer = combineReducers({
    users: user,
    results: results,
    status: status
})

const saveToSessionStorage = (globalState) => {
    try {
        const serializedState = JSON.stringify(globalState);
        sessionStorage.setItem('state', serializedState);
    }
    catch (e) {
        console.log(e)
    }
}

const loadFromSessionStorage = () => {
    const serializedState = sessionStorage.getItem('state');
    if (serializedState == null) {
        return undefined;
    } else {
        return JSON.parse(serializedState);
    }
}

const persistedState = loadFromSessionStorage()

const store = createStore(
    rootReducer, persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    saveToSessionStorage(store.getState())
})

export default store
