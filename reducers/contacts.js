const initialState ={
    contacts:[]
}



function contacts(state = initialState, action) {
    switch (action.type) {
        case 'SET_CONTACTS': {
            return { ...state, ...action.payload }
        }
        case 'DELETE_CONTACT': {
            const contactsAux = state.contacts;
            contactsAux.splice(action.payload.index,1);
            return { ...state, contactsAux }
        }
        default: {
            return state
        }
    }
}

export default contacts;