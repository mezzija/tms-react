import React from 'react';
import  {array} from 'prop-types';

import {useParams} from "react-router-dom";
//components
import BasketButton from "./BasketButton.jsx";
//styles
import useStyles from '../styles/components/Cart';
//helpers
import viewNumber from "../helpers/viewNumber";


const Cart = ({products}) => {
    const classes=useStyles();
    const params = useParams();

    const product = products.find(item => item.id === params.id )|| {price:{}};

    return (
        <div id='Content' className='container'>
            <div className={`${classes.content} row`}>
                <div className={classes.img}>
                    <img src={product.imageLink} alt=""/>
                </div>
                <div className={classes.textWidth}>
                    <p className={classes.title}>{product.title}</p>
                    <p className={classes.characteristic} dangerouslySetInnerHTML={{__html: product.description}}/>
                </div>
                <div className={classes.contentPrice}>
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
