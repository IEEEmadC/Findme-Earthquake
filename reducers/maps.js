function maps(state = {}, action) {
    switch (action.type) {
        case 'GET_PIN_MAPS': {
            return { ...state, ...action.payload }
        }
        default: {
            return state
        }
    }
}

export default maps;