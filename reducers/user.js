const initialState ={
    user:{
        name:null,
        phoneNumber:null,
        image:null,
        uid:null
    }
}

function user(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER': {
            return { ...state, ...action.payload }
        }
        default: {
            return state
        }
    }
}

export default user;