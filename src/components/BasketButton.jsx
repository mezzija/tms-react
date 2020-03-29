import React, {Component} from 'react'

import '../styles/components/ToggleBasket.css'


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
        let activeStyle = this.state.active?' active':'';
    return(
        <a  onClick={this.handleClick} className={`button${activeStyle}`} href="#">{text}</a>
    )
}

}