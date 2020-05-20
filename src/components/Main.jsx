import React from 'react';
import {array} from 'prop-types'

//HOCs
import {compose} from "redux";
import { connect } from 'react-redux';
//Route
import {
    Switch,
    Route
} from "react-router-dom";


// component
import Content from './Content.jsx';
import Cart from "./Cart.jsx";
import SortButton from "./SortButton.jsx";
import CurrencyButton from "./CurrencyButton.jsx";

//styles
import useStyles from '../styles/components/Main';

const Main = (props) => {
    const classes = useStyles();
    return (
        <main className="products container">
            <div className={classes.products__header}>
                <h3>Electronics</h3>
                <CurrencyButton/>
                <SortButton/>
            </div>
            <Switch>
                <Route path="/" exact>
                    {props.products.map(item => (
                        <Content
                            key={item.id}
                             product={item}
                        />
                    ))}
                </Route>
                <Route path="/:id">
                    <Cart
                        products={props.products}
                    />
                </Route>
            </Switch>
        </main>
    )
};

const  mapStateToProps=(state)=>({
    products:state.products.current,
});

Main.propTypes = {
    products:array.isRequired,
}
export default compose(
    connect(mapStateToProps),
)(Main);