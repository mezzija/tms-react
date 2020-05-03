import {combineReducers} from 'redux';

import basketReducer from './basketReducer';
import loadReducer from './loadReducer';
import productsReducer from './productsReducer';
import productsOriginReducer from "./productsOriginReducer";
import valueBYNReducer from "./valueBYNReducer";


const reducers = combineReducers({
    ...basketReducer,
    ...loadReducer,
    ...productsReducer,
    ...productsOriginReducer,
    ...valueBYNReducer,
})

export default reducers;