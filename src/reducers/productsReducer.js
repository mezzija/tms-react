import {handleActions} from 'redux-actions';
import cloneDeep from 'lodash.clonedeep';
//action
import {addProducts, sortDesc, sortAsc,searchProducts} from "../actions";
//state
import {productsState} from "../constants/defaultState";


export default {
    products: handleActions({
        [addProducts]: (state, {payload = []}) => {
            return payload;
        },
        [sortDesc]: (state) => {

            const newState=cloneDeep(state)
            newState.sort((a, b) => {
                if (a.price.value > b.price.value) return -1;
                else return 1;
            });
            return newState

        },
        [sortAsc]: (state) => {

            const newState=cloneDeep(state)
            newState.sort((a, b) => {
                if (a.price.value > b.price.value) return 1;
                else return -1;
            });
            return newState
        },
        [searchProducts]: (state,{payload={productsOrigin:[],searchString:''}})=>{
            const reg=new RegExp(`^${payload.searchString}`,'i');

            return  payload.productsOrigin.filter(product=>reg.test(product.title));

        }
    }, productsState)
}