import {handleActions} from 'redux-actions';
//action
import {addValueByn} from "../actions";
//state
import {valueBYNState} from "../constants/defaultState";

export default {
    valueBYN: handleActions({
        [addValueByn]: (state, {payload = 0}) => {
            return payload;
        }
    }, valueBYNState),
}