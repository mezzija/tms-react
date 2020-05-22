import {handleActions} from 'redux-actions';
//action
import {addCurrency} from "../actions";
//state
import {currencyState} from "../constants/defaultState";

export default {
    currency: handleActions({
        [addCurrency]: (state, {payload = {}}) => {
            return {...state,...payload};
        }
    }, currencyState),
}