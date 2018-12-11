import { combineReducers} from 'redux';
import articles from './articles';
import pins from './pins';
import videos from './videos';
import tabReducer from './tabReducer';

const appReducer =combineReducers({
    articles,
    pins,
    videos,
    tabReducer
})
export default appReducer;
