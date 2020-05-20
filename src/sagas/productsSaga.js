import {put,call,all,takeLatest} from 'redux-saga/effects'
const cloneDeep = require('lodash.clonedeep')
//action
import {
    startLoader,
    endLoader,
    addProducts,
    addProductsOrigin,
    addValueByn,
    getData,
} from "../actions";

import {serverGet} from "../helpers/requests";
import {productsUrl, rateUrl} from "../constants/urls";
//helpers
import sortArray from '../helpers/sortArray';
import {delay} from "../helpers";

export function* getDataSaga(){
    try {

        yield put(startLoader());
        yield delay(1000);
        const [products,rate]=yield all([
            call(serverGet,productsUrl),
            call(serverGet,rateUrl),
        ]);
        yield put(addProducts(sortArray(products, 'desc')));
        yield put(addValueByn(rate.Cur_OfficialRate));
        yield put(endLoader());
    }
    catch (err) {
        console.log(err);
        yield put(startLoader());
    }
}
export default function* products() {
    yield all([
        takeLatest(getData.toString(),getDataSaga)
    ])
}