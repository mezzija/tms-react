import {handleActions} from 'redux-actions';
//action
import {addProducts} from "../actions";
//state
import {productsState} from "../constants/defaultState";

export default {
    products: handleActions({
        [addProducts]: (state, {payload = []}) => {
            return payload;
        }
    }, productsState)
}