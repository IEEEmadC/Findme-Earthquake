const initialState ={
    pins:[]
}



function pins(state = initialState, action) {
    switch (action.type) {
        case 'GET_PIN_MAPS': {
            return { ...state, ...action.payload }
        }
        default: {
            return state
        }
    }
}

export default pins;