import { combineReducers} from 'redux';
import articles from './articles';
import pins from './pins';
import videos from './videos';
import tabReducer from './tabReducer';
import contacts from './contacts'
import user from './user'

const appReducer =combineReducers({
    articles,
    pins,
    videos,
    user,
    contacts,
    tabReducer
})
export default appReducer;
