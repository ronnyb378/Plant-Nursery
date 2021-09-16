export function actionSetError(text) {
    return {
        type: 'SET_ERROR',
        text,
    }
}

export function actionSetSuccess(text) {
    return {
        type: 'SET_SUCCESS',
        text,
    }
}

export function actionSetShow(value) {
    return {
        type: 'SET_SHOW',
        show: value
    }
}