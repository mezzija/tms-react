import React from 'react';
import {withRouter} from 'react-router'
import BasketButton from "./BasketButton.jsx";

import "../styles/components/Cart.css"

const  Cart=(props)=> {
    const handleBasket=(active)=>{
        if(active){
            props.addToBasket(product);
        }else{
            props.removeFromBasket(product);
        }
    };
    let product=props.products.find(item=>item.id===props.match.params.id);
    return (
        <div id='Content' className='container'>
            <div className='content row'>
                <div className='img'>
                    <img src={product.imageLink} alt=""/>
                </div>
                <div className="textWidth">
                    <p className='title' >{product.title}</p>
                    <p className="characteristic" dangerouslySetInnerHTML={{__html:product.description}}/>
                </div>
                <div className='contentPrice'>
                    <p>{viewNumber(product.price.value)}</p>
                    <BasketButton productId={product.id} basket={props.basket} activeButton={handleBasket} />
                </div>
            </div>
        </div>
    );


}
const viewNumber=(num)=>{
    const regDelimiter=new RegExp(/\B(?=(\d{3})+(?!\d))/g );
    return num.toFixed(2).replace(regDelimiter,',');
};
export default withRouter(Cart);
