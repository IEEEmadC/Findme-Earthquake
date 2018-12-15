import { combineReducers} from 'redux';
import articles from './articles';
import pins from './pins';
import videos from './videos';
import tabReducer from './tabReducer';
import contacts from './contacts'
import user from './user'
import selectedVideo from './selectedVideo'
const appReducer =combineReducers({
    articles,
    pins,
    videos,
    user,
    contacts,
    selectedVideo,
    tabReducer
})
export default appReducer;
