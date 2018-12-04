const initialState ={
    articles:[],
}



function articles(state = initialState, action) {
    switch (action.type) {
        case 'GET_ARTICLES': {
            return { ...state, ...action.payload }
        }
        default: {
            return state
        }
    }
}

export default articles;