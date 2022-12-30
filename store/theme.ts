const initialState = {
    theme: 'system',
}

function reducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state
    }
}

export default reducer