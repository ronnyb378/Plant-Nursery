export function results(state=[], action) {
    switch (action.type) {
        case 'SET_RESULTS':
            return action.text
        default:
            return state
    }
}