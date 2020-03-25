import React,{ Component } from 'react';

import '../styles/components/Basket.css';

export default class Basket extends Component{
    render() {
        return(
            <div className='Basket'>
                <div>Basket <span id='count' className="basket__count">0</span> </div>
                <div className='basket__amount'> amount: <span id="amount" >0$</span> </div>
            </div>


        )
    }

}