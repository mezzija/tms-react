import React, {Component} from 'react'

import '../styles/components/BasketButton.css'

import ClassNames from 'classnames'

export default class BasketButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            active:false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        event.preventDefault();
        this.setState(prevState=>({active: !prevState.active}),()=>{
            this.props.activeButton(this.state.active)
        });
    }

    render() {
        let text =this.state.active?"Remove from Basket":"Add to Basket";
    return(
        <a  onClick={this.handleClick} className={ClassNames('button',{'active':this.state.active})} href="#">{text}</a>
    )
}

}