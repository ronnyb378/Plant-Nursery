export function errors(state='', action) {
    switch (action.type) {
        case 'SET_ERROR':
            return action.text
        default:
            return state
    }
}