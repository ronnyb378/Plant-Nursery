export function results(state=null, action) {
    switch (action.type) {
        case 'SET_RESULTS':
            return action.text
        default:
            return state
    }
}