import React from 'react';
import PropTypes from 'prop-types';

//style
import useStyles from '../styles/components/Basket.js'

//helpers
import viewNumber from "../helpers/viewNumber";

const Basket = (props) => {
    const classes = useStyles()
    return (
        <div onClick={props.onClick} className={classes.basket}>
            <div>Basket <span id='count' className={classes.basket__count}>{props.count}</span></div>
            <div className={classes.basket__amount}> amount: <span id="amount">{viewNumber(props.amount)}$</span></div>
        </div>
    )

};
Basket.propTypes = {
    count: PropTypes.number,
    amount: PropTypes.number,
};
export default Basket;