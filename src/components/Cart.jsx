import React from 'react';
import  {array} from 'prop-types';

import {useParams} from "react-router-dom";
//components
import BasketButton from "./BasketButton.jsx";
//styles
import "../styles/components/Cart.css"
//helpers
import viewNumber from "../helpers/viewNumber";


const Cart = ({products}) => {

    const params = useParams();

    const product = products.find(item => item.id === params.id);
    return (
        <div id='Content' className='container'>
            <div className='content row'>
                <div className='img'>
                    <img src={product.imageLink} alt=""/>
                </div>
                <div className="textWidth">
                    <p className='title'>{product.title}</p>
                    <p className="characteristic" dangerouslySetInnerHTML={{__html: product.description}}/>
                </div>
                <div className='contentPrice'>
                    <p>{viewNumber(product.price.value)}</p>
                    <BasketButton product={product}/>
                </div>
            </div>
        </div>
    );
}
Cart.displayName = 'Cart';

Cart.propTypes = {
    products: array.isRequired,
};
export default Cart;
