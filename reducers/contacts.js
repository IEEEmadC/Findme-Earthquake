const initialState ={
    contacts:[]
}



function contacts(state = initialState, action) {
    switch (action.type) {
        case 'SET_CONTACTS': {
            return { ...state, ...action.payload }
        }
        default: {
            return state
        }
    }
}

export default contacts;