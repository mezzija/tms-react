import {createActions} from 'redux-actions';

export const {
    addProducts,
    getData,
    sortAsc,
    sortDesc,
    searchProducts,
    currencyProducts,
    changePrice,
} = createActions(
    'ADD_PRODUCTS',
    'GET_DATA',
    'SORT_ASC',
    'SORT_DESC',
    'SEARCH_PRODUCTS',
    'CURRENCY_PRODUCTS',
    'CHANGE_PRICE',
);


