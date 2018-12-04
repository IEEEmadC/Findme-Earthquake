import { createStore  } from "redux";
import reducer from './reducers/articles'
const store = createStore(reducer,
    {
        videos: [],
        articles:[],
        pins:[]
    }
);

export default store;