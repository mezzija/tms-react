import {handleActions} from 'redux-actions';

import {startLoader,endLoader} from "../actions";

import {loadState} from '../constants/defaultState';

export default {
    load:handleActions({
        [startLoader]:()=>true,
        [endLoader]:()=>false,
    },loadState)
}