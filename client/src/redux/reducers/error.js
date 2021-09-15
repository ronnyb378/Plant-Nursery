export function errors(state=null, action) {
    switch (action.type) {
        case 'SET_ERRORS':
            return action.text
        default:
            return state
    }
}