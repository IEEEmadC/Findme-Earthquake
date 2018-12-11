import { createStore, applyMiddleware } from 'redux';
import { createReactNavigationReduxMiddleware,} from 'react-navigation-redux-helpers';
import reducer from './reducers/index';

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.tabReducer,
);

const store = createStore(
    reducer,
    applyMiddleware(middleware),
);


export default store;