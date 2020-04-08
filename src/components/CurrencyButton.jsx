import React, {Component} from 'react';

import '../styles/components/CurrencyButton.css'

export default class CurrencyButton extends Component{
    constructor(props) {
        super(props);
        this.state={
            active:false,
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState=>({active:!prevState.active}),()=>this.props.currencyProduct(this.state.active))
    }
    render() {
        let currency=!this.state.active?'BYN':'USD';
        return(
            <a onClick={this.handleClick} href="#" className={'CurrencyButton'}>{currency}</a>
        );
    }

}