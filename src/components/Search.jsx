import React from 'react';
import {connect} from 'react-redux'

import '../styles/components/Search.css';
import {searchProducts} from "../actions";


const Search = ({searchProducts,...props}) => {
    const handleInput=(event)=>{
        event.preventDefault();
        searchProducts({productsOrigin:props.productsOrigin,searchString:event.target.value});
    }
    return (
        <form>
            <input onInput={handleInput} id="search" className="header__search" type="text" placeholder="Search"/>
        </form>
    )

}
const mapDispatchToProps={
    searchProducts,
};
const mapStateToProps = (state) => ({
    productsOrigin: state.productsOrigin,

});
export default connect(mapStateToProps,mapDispatchToProps)(Search);