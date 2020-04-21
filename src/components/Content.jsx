import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {withRouter} from 'react-router'

import BasketButton from "./BasketButton.jsx";

import '../styles/components/Content.css';

const Content=(props)=>{
    const handleClick=(event)=>{
        event.preventDefault();
        props.history.push(`/${props.product.id}`);

    }
    const handleBasket=(active)=>{
        if(active){
            props.addToBasket(props.product);
        }else{
            props.removeFromBasket(props.product);
        }
    };

    return(
            <div id='Content' className='container'>
                <div className='content row'>
                    <div className='img'>
                        <img src={props.product.imageLink} alt=""/>
                    </div>
                    <div className="textWidth">
                        <a  onClick={handleClick} className='title' href="#">{props.product.title}</a>
                        <p className="characteristic" dangerouslySetInnerHTML={{__html:props.product.description}}/>
                    </div>
                    <div className='contentPrice'>
                        <p>{viewNumber(props.product.price.value)}</p>
                        <BasketButton productId={props.product.id} basket={props.basket} activeButton={handleBasket} />
                    </div>
                </div>
            </div>
        )

};
const viewNumber=(num)=>{
    const regDelimiter=new RegExp(/\B(?=(\d{3})+(?!\d))/g );
    return num.toFixed(2).replace(regDelimiter,',');
};


Content.propTypes={
    products:PropTypes.object,
    addToBasket: PropTypes.func,
    removeFromBasket:PropTypes.func,
};
export default withRouter(Content);