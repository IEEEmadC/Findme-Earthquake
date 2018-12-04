const initialState ={
    videos:[]
}

function videos(state = initialState, action) {
    switch (action.type) {
        case 'GET_VIDEOS': {
            return { ...state, ...action.payload }
        }
        default: {
            return state
        }
    }
}

export default videos;