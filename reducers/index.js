import { combineReducers} from 'redux';
import articles from './articles';
import pins from './pins';
import videos from './videos';

export default combineReducers({
    articles,
    pins,
    videos
})

