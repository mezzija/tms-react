import React from 'react'
import viewNumber from "../helpers/viewNumber";

import '../styles/components/BasketCart.css'

const BasketCart = ({product}) => {
    return (
        <>
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
                    </div>
                </div>
            </div>
        </>
    );
}
export default BasketCart;