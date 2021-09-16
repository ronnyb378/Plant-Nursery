export function status(state={show:false}, action) {

    switch (action.type) {
        case 'SET_ERROR':
            return action.text
        case 'SET_SUCCESS':
            return action.text
        case 'SET_SHOW':
            return action.value
        default:
            return state
    }
}