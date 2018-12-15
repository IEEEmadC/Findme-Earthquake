const initialState ={
    selectedVideo:[]
}

function selectedVideo(state = initialState, action) {
    switch (action.type) {
        case 'SET_SELECT_VIDEO': {
            return { ...state, ...action.payload }
        }
        default: {
            return state
        }
    }
}

export default selectedVideo;