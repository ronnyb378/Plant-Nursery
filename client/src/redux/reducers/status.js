export function status(state = {}, action) {
    switch (action.type) {
        case 'SET_ERROR':
            return action.text
        case 'SET_SUCCESS':
            return action.text
        case 'CLEAR_ALERTS':
            return {}
        default:
            return state
    }
}