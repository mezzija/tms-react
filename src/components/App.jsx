import React, { useEffect} from 'react';
import {bool, func} from 'prop-types';
import {compose} from "redux";

//HOCs
import {hot} from 'react-hot-loader/root';
import {connect} from 'react-redux';

const cloneDeep = require('lodash.clonedeep')


//actions
import {
    addToBasket,
    removeFromBasket,
    startLoader,
    endLoader,
    addProducts,
    addProductsOrigin,
    addValueByn,

} from "../actions";

//component
import Header from './Header.jsx';
import Main from "./Main.jsx";
import Loader from "./Loader.jsx"

//style
import '../styles/components/App.css';

//helpers
import sortArray from '../helpers/sortArray';


const App = (props) => {
    useEffect(() => {
        props.startLoader();
        setTimeout(() => {
            Promise.all([
                fetch('/api/products')
                    .then(response => response.json()),
                fetch('https://www.nbrb.by/api/exrates/rates/840?parammode=1')
                    .then(response => response.json()),

            ])
                .then(([products, nbrb]) => {
                    props.addProducts(sortArray(products, 'desc'));
                    props.addProductsOrigin(cloneDeep(products));
                    props.addValueByn(nbrb.Cur_OfficialRate);
                    props.endLoader();

                })
                .catch(err => {
                    console.log(err);
                    props.startLoader();
                });
        }, 1000);

    }, []);
    const {load} = props;

    return (
        <>
            <Loader display={load}/>
            <Header/>
            <Main/>
        </>
    )

}

const mapStateToProps = (state) => ({
    load: state.load,

});
const mapDispatchToProps = {
    startLoader,
    endLoader,
    addProducts,
    addProductsOrigin,
    addValueByn,
};

App.displayName = 'App';

App.propTypes = {
    load: bool.isRequired,
    startLoader: func.isRequired,
    endLoader: func.isRequired,
    addValueByn: func.isRequired,
}
export default compose(
    hot,
    connect(mapStateToProps, mapDispatchToProps),
)(App);