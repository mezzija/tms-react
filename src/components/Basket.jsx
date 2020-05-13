import React from 'react';
import PropTypes from 'prop-types';

//style
import '../styles/components/Basket.css';
//helpers
import viewNumber from "../helpers/viewNumber";

const Basket = (props) => {

    return (
        <div onClick={props.onClick} className='basket'>
            <div>Basket <span id='count' className="basket__count">{props.count}</span></div>
            <div className='basket__amount'> amount: <span id="amount">{viewNumber(props.amount)}$</span></div>
        </div>
    )

};
Basket.propTypes = {
    count: PropTypes.number,
    amount: PropTypes.number,
};
export default Basket;