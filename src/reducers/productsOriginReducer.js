import {handleActions} from 'redux-actions';
//action
import {addProductsOrigin} from "../actions";
//state
import {productsOriginState} from "../constants/defaultState";

export default {
    productsOrigin: handleActions({
        [addProductsOrigin]: (state, {payload = []}) => {
            return payload;
        }
    }, productsOriginState)
}