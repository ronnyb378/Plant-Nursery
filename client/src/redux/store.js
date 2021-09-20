import { combineReducers, createStore } from "redux";
import { status } from "./reducers/status";
import { results } from "./reducers/results";
import { user } from "./reducers/user";

const rootReducer = combineReducers({
    users: user,
    results: results,
    status: status
})

// SESSION NOTES: sessionStorage is cleared when page session ends
// page session lasts as long as tab or browser is open, and survives over page reloads

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

// SESSION NOTES: createStore has a second optional argument, '[preloadedState]'
const store = createStore(
    rootReducer, persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// SESSION NOTES: store.subscribe adds a change listener
store.subscribe(() => {
    // SESSION NOTES: store.getState() returns current state tree of application. 
    saveToSessionStorage(store.getState())
})

export default store
