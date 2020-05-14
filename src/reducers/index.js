import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import basketReducer from './basketReducer';
import loadReducer from './loadReducer';
import productsReducer from './productsReducer';
import productsOriginReducer from "./productsOriginReducer";
import valueBYNReducer from "./valueBYNReducer";


const reducers = persistReducer({
        key:'root',
        storage,
    whitelist:[
        'basket',
    ]

    },
    combineReducers({
    ...basketReducer,
    ...loadReducer,
    ...productsReducer,
    ...productsOriginReducer,
    ...valueBYNReducer,
}));

export default reducers;