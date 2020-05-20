import {handleActions} from 'redux-actions';
import CloneDeep from 'lodash.clonedeep';
//action
import {addProducts, sortDesc, sortAsc,searchProducts,currencyProducts} from "../actions";
//state
import {productsState} from "../constants/defaultState";


export default {
    products: handleActions({
        [addProducts]: (state, {payload = []}) => ({current: payload, origin: payload}),
        [sortDesc]: (state) => {

            const newState= [...state.current];
            newState.sort((a, b) => {
                if (a.price.value > b.price.value) return -1;
                else return 1;
            });
            return {...state,current:newState}

        },
        [sortAsc]: (state) => {

            const newState=[...state.current];
            newState.sort((a, b) => {
                if (a.price.value > b.price.value) return 1;
                else return -1;
            });
            return {...state,current:newState}
        },
        [searchProducts]: (state,{payload=''})=>{
            const reg=new RegExp(payload.searchString,'i');

            return {...state,current:state.origin.filter(product => reg.test(product.title))};

        },
        [currencyProducts]:(state,{payload=0})=>{
            const newState = CloneDeep(state.origin)
            if (payload){
                newState.forEach(item=>{
                    item.price.value*=payload;
                    item.price.currency='BYN';
                })
                return {...state,current:newState};
            }else return {...state,current:state.origin};
        }


    }, productsState)
}