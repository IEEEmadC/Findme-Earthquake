function videos(state = {}, action) {

    //let videos = {};
    // console.log(videos);
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