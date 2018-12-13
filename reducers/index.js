import { combineReducers} from 'redux';
import articles from './articles';
import pins from './pins';
import videos from './videos';
import tabReducer from './tabReducer';
import user from './user'

const appReducer =combineReducers({
    articles,
    pins,
    videos,
    user,
    tabReducer
})
export default appReducer;
