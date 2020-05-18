import {createActions} from 'redux-actions';

export const {
    addProducts,
    getData,
    sortAsc,
    sortDesc,
    addProductsOrigin,
    searchProducts,
} = createActions(
    'ADD_PRODUCTS',
    'GET_DATA',
    'SORT_ASC',
    'SORT_DESC',
    'ADD_PRODUCTS_ORIGIN',
    'SEARCH_PRODUCTS',
);


