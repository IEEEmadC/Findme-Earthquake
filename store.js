// import { createStore, applyMiddleware } from 'redux';
// import { createReactNavigationReduxMiddleware,} from 'react-navigation-redux-helpers';
// import reducer from './reducers/index';

// // Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
// const middleware = createReactNavigationReduxMiddleware(
//     'root',
//     state => state.tabReducer,
// );

// const store = createStore(
//     reducer,
//     applyMiddleware(middleware),
// );


// export default store;


import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { createReactNavigationReduxMiddleware, } from 'react-navigation-redux-helpers';
import storage from 'redux-persist/lib/storage'
import reducer from './reducers/index';

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['tabReducer']
}
const persistedReducer = persistReducer(persistConfig, reducer)
const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.tabReducer,
);

const store = createStore(
    persistedReducer,
    applyMiddleware(middleware),
);

const persistor = persistStore(store)
export {store, persistor};
