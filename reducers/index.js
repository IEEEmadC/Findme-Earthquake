import { combineReducers} from 'redux';
import articles from './articles';
import maps from './maps';
import videos from './videos';

export default combineReducers({
    articles,
    maps,
    videos
})

