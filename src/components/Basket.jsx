import React,{ Component } from 'react';

import '../styles/components/Basket.css';

const  Basket=(props)=>{

        return(
            <div className='Basket'>
                <div>Basket <span id='count' className="basket__count">{props.count}</span> </div>
                <div className='basket__amount'> amount: <span id="amount" >{props.amount}$</span> </div>
            </div>


        )

};
export default Basket;