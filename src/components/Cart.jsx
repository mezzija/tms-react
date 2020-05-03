import React from 'react';
import {withRouter} from 'react-router'
import BasketButton from "./BasketButton.jsx";
//styles
import "../styles/components/Cart.css"
//helpers
import viewNumber from "../helpers/viewNumber";

const Cart = (props) => {

    let product = props.products.find(item => item.id === props.match.params.id);
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
export default withRouter(Cart);
