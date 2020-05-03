import React, {Component} from 'react';
import PropTypes from 'prop-types';

//HOCs
import {compose} from "redux";
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

//component
import BasketButton from "./BasketButton.jsx";

//style
import '../styles/components/Content.css';

//helpers
import viewNumber from "../helpers/viewNumber";

const Content = ({product,history}) => {
    const handleClick = (event) => {
        event.preventDefault();
        history.push(`/${product.id}`);

    }
    return (
        <div id='Content' className='container'>
            <div className='content row'>
                <div className='img'>
                    <img src={product.imageLink} alt=""/>
                </div>
                <div className="textWidth">
                    <a onClick={handleClick} className='title' href="#">{product.title}</a>
                    <p className="characteristic" dangerouslySetInnerHTML={{__html:product.description}}/>
                </div>
                <div className='contentPrice'>
                    <p>{viewNumber(product.price.value)}</p>
                    <BasketButton product={product} />
                </div>
            </div>
        </div>
    )

};

Content.propTypes = {
    products: PropTypes.object,
    addToBasket: PropTypes.func,
    removeFromBasket: PropTypes.func,
    basket: PropTypes.object,
};
export default compose(
    withRouter,
)(Content);