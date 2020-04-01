import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BasketButton from "./BasketButton.jsx";

import '../styles/components/Content.css';

export default class Content extends Component{
    constructor(props){
        super(props);
        this.handleBasket =  this.handleBasket.bind(this);
    }
    viewNumber(num){
        const regDelimiter=new RegExp(/\B(?=(\d{3})+(?!\d))/g );
        return num.toFixed(2).replace(regDelimiter,',');
    };
    handleBasket(active){
        if(active){
            this.props.addToBasket(this.props.product);
        }else{
            this.props.removeFromBasket(this.props.product);
        }
    }
    render() {

        return(
            <div id='Content' className='container'>
                <div className='content row'>
                    <div className='img'>
                        <img src={this.props.product.imageLink} alt=""/>
                    </div>
                    <div className="textWidth">
                        <a className='title' href="#">{this.props.product.title}</a>
                        <p className="characteristic" dangerouslySetInnerHTML={{__html:this.props.product.description}}/>
                    </div>
                    <div className='contentPrice'>
                        <p>{this.viewNumber(this.props.product.price.value)}</p>
                        <BasketButton activeButton={this.handleBasket} />
                    </div>
                </div>
            </div>
        )
    }
}
Content.propTypes={
    products:PropTypes.object,
    addToBasket: PropTypes.func,
    removeFromBasket:PropTypes.func,
};