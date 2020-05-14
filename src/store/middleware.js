import {applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware =createSagaMiddleware();
const middleware = [sagaMiddleware];


if (process.env.NODE_ENV==='development'){
    const {createLogger} =require('redux-logger');
    const invariant = require('redux-immutable-state-invariant').default();
    middleware.push(invariant);
    middleware.push(createLogger({collapse:true}));

}

export default applyMiddleware(...middleware);