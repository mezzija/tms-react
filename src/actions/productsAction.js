import {createActions} from 'redux-actions';

export const {
    addProducts,
    getData,
} = createActions(
    'ADD_PRODUCTS',
    'GET_DATA',
);


