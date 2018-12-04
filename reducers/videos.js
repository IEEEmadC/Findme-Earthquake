function videos(state = {}, action) {
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